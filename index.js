const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const shopDomain = 'hello24-d5.myshopify.com';
const accessToken = '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';
const apiVersion = '2022-04';

// Helper function to format a number with two digits
const formatTwoDigits = (num) => {
  return num.toString().padStart(2, '0');
};

// Function to fetch orders with pagination support
const fetchOrders = async (pageInfo = null) => {
  let cursor = '';

  if (pageInfo) {
    cursor = `, after: "${pageInfo}"`;
  }

  const query = `
    {
      shop {
        orders(first: 30${cursor}, sortKey: CREATED_AT) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              name
              createdAt
            }
          }
        }
      }
    }
  `;

  try {
    const response = await axios.post(`https://${shopDomain}/admin/api/${apiVersion}/graphql.json`, {
      query
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': accessToken
      }
    });

    const data = response.data;
    const orders = data.data.shop.orders.edges;

    return orders;
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
};

// Route to list orders within a specified date range
app.get('/list-orders', async (req, res) => {
  try {
    const orders = await fetchOrders();

    const startDate = new Date('2022-12-05T00:00:00Z');
    const endDate = new Date('2022-12-29T23:59:59Z');

    // console.log('All orders:', orders);

    const filteredOrders = orders
      .filter(order => {
        const createdAt = new Date(order.node.createdAt);
        return createdAt >= startDate && createdAt <= endDate;
      })
      .map(order => ({
        name: order.node.name,
        createdAt: new Date(order.node.createdAt)
      }))
      .sort((a, b) => a.createdAt - b.createdAt); // Sort in ascending order

    console.log('Filtered and sorted orders:', filteredOrders);

    if (filteredOrders.length === 0) {
      console.log('No orders found within the specified date range.');
      res.json({ message: 'No orders found within the specified date range.' });
    } else {
      res.json(filteredOrders);
    }
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).send('Error fetching orders');
  }
});

// Start the Express app
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

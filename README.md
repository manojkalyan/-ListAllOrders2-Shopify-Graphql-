# Shopify Orders Filtering and Sorting

This Node.js application fetches orders from a Shopify store, filters them within a specified date range, and sorts them in ascending order based on the creation date.

# Table of Contents
- [Setup](#setup)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Notes](#notes)

# Setup

1. Clone the repository or download the source code.

2. Navigate to the project directory using the terminal.

3. Install the required dependencies using npm:
   ```sh
   npm install
# Usage
- Start the Node.js server:node app.js
- Access the /list-orders endpoint in your browser or API testing tool.

- You will receive a JSON response containing filtered and sorted orders within the specified date range.

# Endpoints
/list-orders: Fetches and returns orders placed within a specified date range. The date range can be configured in the code.
# images of output


# filtered Dates between 12/12/2022 to 29/12/2022
![Screenshot (53)](https://github.com/manojkalyan/-ListAllOrders2-Shopify-Graphql-/assets/70328306/8dc10b45-0102-4b1a-a267-2d945bc33566)
# response in browser
![Screenshot (54)](https://github.com/manojkalyan/-ListAllOrders2-Shopify-Graphql-/assets/70328306/5a55754c-d93e-47d0-96e2-013ba3fa4299)

# filtered Dates between 05/12/2022 to 29/12/2022
![Screenshot (56)](https://github.com/manojkalyan/-ListAllOrders2-Shopify-Graphql-/assets/70328306/e2f185da-319f-4a0a-ab86-89ff085be2cd)


# response in browser


![Screenshot (55)](https://github.com/manojkalyan/-ListAllOrders2-Shopify-Graphql-/assets/70328306/7d394457-82f1-4f81-85ab-018d64b49d8a)


import { CreateOrdersTable } from "./orders/table.seed";
import { InsertOrders } from "./orders/data.seed";
import { CreateUserTable } from "./users/table.seed";
import { InsertSeedData } from "./users/data.seed";
import { InsertProducts } from "./products/data.seed";
import { CreateProductTable } from "./products/table.seed";

CreateProductTable(() => {
    InsertProducts()
})

CreateOrdersTable(() => {
    InsertOrders()
})

CreateUserTable(() => {
    InsertSeedData()
})
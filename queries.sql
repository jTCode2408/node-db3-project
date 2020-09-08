-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT Product.ProductName, CategoryName FROM Product 
INNER JOIN Category ON Product.CategoryId = Category.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT O.OrderDate,
        O.ShipVia,
       CompanyName
  FROM [Order] AS O
  JOIN Shipper ON O.ShipVia = Shipper.Id
  WHERE O.OrderDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT O.OrderId,
        O.Quantity,
       ProductName
  FROM [OrderDetail] AS O
  INNER JOIN Product ON O.ProductId = Product.Id
  WHERE O.OrderId = '10251'
  ORDER BY ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT O.Id AS OrderId,
       CompanyName,
       Employee.LastName as EmployeeLastName
  FROM [Order] AS O
  INNER JOIN Customer ON O.CustomerId = Customer.Id
  INNER JOIN Employee ON O.EmployeeId = Employee.Id


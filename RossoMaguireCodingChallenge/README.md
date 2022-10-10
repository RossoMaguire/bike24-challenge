### Tooling

- Initialized new React TypeScript poject using Vite

### Design choices:

- Added Chakra UI

- Following Atomic Design principles

- Product type added and response types as Product[], fetched produts in ProductSelect component

- Input is ReadOnly

- Adding more of same item to cart overwrites the same line with new amounts

- Using Context to share data between components

### Optimizations:

- Use React Query to fetch data and manage state

- useMemo on functions

- Save cart in local storage

Separation of concerns:

- Moved API to own client in class component

- Helper lib created for cart functions

Alternative approaches considered:

- Considered hardcoding 10 rows in the table and adding the items to the line rather than generating the line on Add To Cart click so the user could see in advance the table holds max 10 items

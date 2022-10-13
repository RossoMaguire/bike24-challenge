## Decisions and approach

To run it, simply:

- `npm install`
- `npm run dev`

To run tests:

- `npm test`

_note: please have dev server up when running tests to avoid warnings as fetch is not fully mocked_

### Tooling

- Initialized new React TypeScript project using Vite

- Used ES Lint for linting errors and code review

- React testing library & jest for basic tests

### Design choices

- Added Chakra UI

- Following Atomic Design principles

- Product type added and response types as `Product[]`, fetched products in `ProductSelect` component

- Input is `ReadOnly`

- Adding more of same item to cart overwrites the same line with new amounts

- Using Context to share data between components

### Optimizations

- `useMemo` on functions that don't need re-rendering

### Alternative approaches considered

- Considered hardcoding 10 rows in the table and adding the items to the line rather than generating the line on Add To Cart click so the user could see in advance the table holds max 10 items

- Considered moving API call to own client in class component or using React Query

## Future improvements to be made

- Make design responsive and work with designers to improve UI

- Ensure accessiblity of Markup

- Save application state (slider position, amount, cart items) in local storage

- Helper lib for cart functions to separate concerns

- Add more tests, solve some known bugs with slider and catch more edge cases

- Would improve tests & not use as much of `data-testid`

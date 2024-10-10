

# Wikipedia Search By Api (for educational purpose)

You can search everything and your desired data will fetched by wiki api and show to you.

## Screen Shot
![Mobile Device Screenshot](./assets/wiki.PNG)

## Live link:
[Wiki Clone](https://istiakahmedsaad.github.io/Wikipedia-Search-Api/)


## Installation

Install this project with npm

install latest [Node.js](https://nodejs.org/en/download/package-manager)

```bash
  1. npm install -D tailwindcss
  2. npm i -D daisyui@latest
  3. npm run dev
  4. default port :5500
```
    
## API Reference

#### Get all items

```http
  https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=500&srsearch=${encodeURIComponent(
      searchValue
    )}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `searchValue` | `string` | pass this Parameter to your function |

#### Get item

```http
  https://en.wikipedia.org/?curid=${result.pageid}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `result`      | `string` | result value from your search data |
 

## Idea from

- [@AsmrProg-YT](https://github.com/AsmrProg-YT)

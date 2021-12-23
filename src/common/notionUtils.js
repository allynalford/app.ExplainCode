const { Client } = require("@notionhq/client");

const notion = new Client({
    auth: process.env.REACT_APP_NOTION_TOKEN,
})

/**
 * Pages - Notions pages list
 */
 export const Pages = () => {
    notion.pages.
};
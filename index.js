import { Bot } from "gramio";
import "dotenv/config";

const bot = new Bot(process.env.BOT_TOKEN);

bot.on("inline_query", async (context) => {

  await context.answerInlineQuery([
    {
      type: "article",
      id: "1",
      title: "жопа",
      input_message_content: {
        message_text: `ЖОПААА`,
      },
    },
  ]);
});

bot.start()


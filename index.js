import { Bot } from "gramio";
import "dotenv/config";

const phrases = [
  "ЖОПА",
  "жопо?",
  "жопи-жопи",
  "ЖО-ПАА!",
];

const bot = new Bot(process.env.BOT_TOKEN);

bot.on("inline_query", async (context) => {
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

  await context.answerInlineQuery([
    {
      type: "article",
      id: "1",
      title: "жопа",
      input_message_content: {
        message_text: randomPhrase,
      },
    },
  ], 
  {cache_time: 0}
  );
});

bot.start()


import { Bot } from "gramio";
import "dotenv/config";
import phrases from "./phrases";
import videos from "./videos";

const token = process.env.BOT_TOKEN;

if (!token) {
  throw new Error("token is empty");
}

const bot = new Bot(token).on("inline_query", async (context) => {
  const phrasesCount = Math.floor((Math.random() * 9) + 1); // 0..=1 => 0..=9 => 1..=10
  const getRandomPhrase = () => phrases[Math.floor(Math.random() * phrases.length)];
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];

  await context.answerInlineQuery(
    [
      {
        type: "article",
        id: "1",
        title: "жопа",
        input_message_content: {
          message_text: Array.from({length: phrasesCount}, () => getRandomPhrase()).join("\n"),
        },
      },
      {
        type: "video",
        id: "2",
        title: "жопа(видео)",
        video_file_id: randomVideo,
      },
    ],
    { cache_time: 0 },
  );
});

export default bot;

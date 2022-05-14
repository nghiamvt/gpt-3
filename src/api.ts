export type Request = {
  prompt: string;
  temperature: number;
  max_tokens: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
};

export type Response = {};

export const sendMessage = async (data: Request) => {
  const response = await fetch(
    "https://api.openai.com/v1/engines/text-curie-001/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_API_KEY}`,
      },
      body: JSON.stringify(data),
    },
  );

  return response.json();
};

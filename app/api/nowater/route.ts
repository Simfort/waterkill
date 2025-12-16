"use server";

import { openai } from "@/config/openAiModel";
import { aiBase } from "@/lib/searchAi";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { notes } = await req.json();
  try {
    const completion = await openai.chat.completions.create({
      model: "nex-agi/deepseek-v3.1-nex-n1:free",
      messages: [
        {
          role: "system",
          content: aiBase,
        },
        {
          role: "user",
          content: `
Проанализируй этот текст на «водные» ошибки и клише:

${notes}

Верни результат в виде исправленного текста.


В конце добавь: 
'''stat Общая оценка «воды»: '''stat  ...% '''
      `,
        },
      ],
      temperature: 0.3, // Меньше «творчества», больше точности
    });
    const Res = completion.choices[0].message.content;
    return NextResponse.json(Res);
  } catch (error) {
    return NextResponse.json(error);
  }
}

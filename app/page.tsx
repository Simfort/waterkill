"use client";

import Button from "./_components/Button";
import Textarea from "./_components/Textarea";

export default function Home() {
  return (
    <div className="grid grid-cols-12 max-md:grid-cols-6 ">
      <header className="col-span-12 h-[114px] max-md:h-[50px]  items-center grid grid-cols-subgrid">
        <Button className="border-2 border-primary text-primary col-start-10 max-md:col-span-2 max-md:col-start-5 ">
          О нас
        </Button>
      </header>
      <h2 className="col-start-2 col-end-13 mt-[20px]  max-md:col-start-1 max-md:ml-[20px] text-[24px]">
        <span className="text-primary">AI</span> обработка текста
      </h2>
      <Textarea />
      <div className="col-span-full flex-col items-center mt-[100px] flex justify-center">
        <h2 className="text-primary">Возвращенный результат:</h2>
        <ul className="flex list-disc font-normal flex-col pl-20">
          <li>Количество воды в тексте</li>
          <li>Новый исправленный текст</li>
        </ul>
      </div>
    </div>
  );
}

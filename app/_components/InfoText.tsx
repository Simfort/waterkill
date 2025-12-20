import { InfoTextBase } from "@/lib/utils";

export default function InfoText({ info }: { info: InfoTextBase }) {
  return (
    <div className="flex flex-col  justify-center items-center p-5">
      <div className=" flex flex-col text-primary   items-center">
        {" "}
        <div className="h-[100px] w-[100px] border-5 border-primary rounded-full flex items-center justify-center text-2xl ">
          {info.water}
        </div>
        Процентов воды в вашем тексте
      </div>
      <div className="flex gap-2">
        <span className="text-red-500">Исправленный текст:</span>{" "}
        <p>{info.newText}</p>
      </div>
    </div>
  );
}

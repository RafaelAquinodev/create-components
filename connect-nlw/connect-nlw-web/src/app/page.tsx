import { InputField, InputIcon, InputRoot } from "@/components/input";
import { Mail, User } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
      <div className="space-y-3">
        <InputRoot>
          <InputIcon>
            <User />
          </InputIcon>
          <InputField type="text" placeholder="Nome completo" />
        </InputRoot>

        <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>
          <InputField type="text" placeholder="E-mail" />
        </InputRoot>
      </div>
    </main>
  );
}

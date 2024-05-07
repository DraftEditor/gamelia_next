'use client';
import FunctionBar from "@/components/content/functionbar/functionbar";
import TextChat from "@/components/content/textchat/textchat";
import Users from "@/components/content/users/users";
import "./page.css";

interface TopbarHeightProp {
  Height: number
}

export default function Content({ Height }: TopbarHeightProp ){
  return(
    <div className="chat_content_a">
        <FunctionBar/>
        <div className="chat_content_b">
            <TextChat Height={Height}/>
            <Users Height={Height} />
        </div>
    </div>
  );
}
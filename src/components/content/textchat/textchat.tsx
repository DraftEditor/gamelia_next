'use client';
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from 'react';
import "./textchat.css"
import Image from 'next/image';

interface HeightProp {
  Height: number
}

export default function Textchat({ Height }: HeightProp) {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const heightStyle = {
    height: viewportHeight - Height - 49
  };
  return (
    <div style={heightStyle} className="textchat">
      <main style={heightStyle} className="chatContent_f087cb" aria-label="《🍷》メインチャット (チャンネル)">
        <div className="messagesWrapper_add28b group-spacing-16">
          <div className="scroller_e412fe customTheme__6006b auto__020ac scrollerBase__65223 disableScrollAnchor__2949b managedReactiveScroller__08e95" dir="ltr" data-jump-section="global" role="group">
            <div className="scrollerContent__94ac9 content__4b45f">
                <ol className="scrollerInner__37fee" aria-label="《🍷》メインチャットのメッセージ" role="list" data-list-id="chat-messages">
                    <li id="chat-messages-706861709377142859-1237344032351588352" className="messageListItem__050f9">
                        <div className="message_ccca67 cozyMessage__9f4fd groupStart__7b93c wrapper_a62503 cozy_f5c119 zalgo__39311"
                            role="article"
                            aria-roledescription="メッセージ"
                            aria-labelledby="message-username-1237344032351588352 uid_1 message-content-1237344032351588352 uid_2 message-timestamp-1237344032351588352">
                            <div className="contents_d3ae0d">
                                    <Image
                                        src="https://cdn.discordapp.com/avatars/1176787787383582733/8fc2aa2b27003f8a08768a6b72a480fa.webp?size=100"
                                        aria-hidden="true"
                                        className="avatar__08316 clickable__09456"
                                        width="20"
                                        height="20"
                                        alt=" ">
                                    </Image>
                                <h3 className="header__6a14d"
                                    aria-labelledby="message-username-1237344032351588352 message-timestamp-1237344032351588352"><span
                                        id="message-username-1237344032351588352" className="headerText_bd68ec hasRoleIcon__74079"><span
                                            className="username__0b0e7 desaturateUserColors_eb6bd2 clickable__09456" aria-expanded="false"
                                            role="button" style={{color: "rgb(106, 90, 205)"}}>411ll</span><span><span className=""
                                                role="button">
                                                    <Image alt="" aria-label="ロールアイコン、Tier III"
                                                    className="roleIcon__92480 roleIcon_b6fe3d clickable__5ba8f" height="20"
                                                    src="https://cdn.discordapp.com/role-icons/958656946561495112/1bf63a8649fbba72b21021c5f4fdd855.webp?size=28&amp;quality=lossless"
                                                    width="20">
                                                    </Image></span></span></span><span
                                        className="timestamp_c79dd2 timestampInline__430cf"><time aria-label="今日 19:03"
                                            id="message-timestamp-1237344032351588352"><i
                                                className="separator__31fcc" aria-hidden="true"> — </i>今日 19:03</time></span></h3>
                                <div id="message-content-1237344032351588352" className="markup_a7e664 messageContent_abea64">
                                    <span>親指下に下げながら、ふくらはぎに本気で力入れてみて</span></div>
                            </div>
                            <div id="message-accessories-1237344032351588352" className="container__62863"></div>
                            <div className="buttonContainer__6de7e">
                                <div className="buttons__36852 container__2f489 isHeader_db0644" role="group" aria-label="メッセージ操作">
                                    <div className="buttonsInner_a9dfff wrapper__4e6b6">
                                        <div className="button_d4bf9b" aria-label="リアクションを付ける" aria-expanded="false" role="button">
                                            <svg className="icon__1a2d2" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="18" height="18" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 0 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="返信" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M2.3 7.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L5.42 9H11a7 7 0 0 1 7 7v4a1 1 0 1 0 2 0v-4a9 9 0 0 0-9-9H5.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z"
                                                    className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="スレッドを作成" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36ZM15.66 16.8a1 1 0 0 1-1.38.28l-8.49-5.66A1 1 0 1 1 6.9 9.76l8.49 5.65a1 1 0 0 1 .27 1.39ZM17.1 14.25a1 1 0 1 0 1.11-1.66L9.73 6.93a1 1 0 0 0-1.11 1.66l8.49 5.66Z"
                                                    fill="currentColor" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="その他" aria-expanded="false" role="button"><svg
                                                className="icon_e3aee9" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li id="chat-messages-706861709377142859-1237344032351588352" className="messageListItem__050f9">
                        <div className="message_ccca67 cozyMessage__9f4fd groupStart__7b93c wrapper_a62503 cozy_f5c119 zalgo__39311"
                            role="article"
                            aria-roledescription="メッセージ"
                            aria-labelledby="message-username-1237344032351588352 uid_1 message-content-1237344032351588352 uid_2 message-timestamp-1237344032351588352">
                            <div className="contents_d3ae0d">
                                    <Image
                                        src="https://cdn.discordapp.com/avatars/1176787787383582733/8fc2aa2b27003f8a08768a6b72a480fa.webp?size=100"
                                        aria-hidden="true"
                                        className="avatar__08316 clickable__09456"
                                        width="20"
                                        height="20"
                                        alt=" ">
                                    </Image>
                                <h3 className="header__6a14d"
                                    aria-labelledby="message-username-1237344032351588352 message-timestamp-1237344032351588352"><span
                                        id="message-username-1237344032351588352" className="headerText_bd68ec hasRoleIcon__74079"><span
                                            className="username__0b0e7 desaturateUserColors_eb6bd2 clickable__09456" aria-expanded="false"
                                            role="button" style={{color: "rgb(106, 90, 205)"}}>411ll</span><span><span className=""
                                                role="button">
                                                    <Image alt="" aria-label="ロールアイコン、Tier III"
                                                    className="roleIcon__92480 roleIcon_b6fe3d clickable__5ba8f" height="20"
                                                    src="https://cdn.discordapp.com/role-icons/958656946561495112/1bf63a8649fbba72b21021c5f4fdd855.webp?size=28&amp;quality=lossless"
                                                    width="20">
                                                    </Image></span></span></span><span
                                        className="timestamp_c79dd2 timestampInline__430cf"><time aria-label="今日 19:03"
                                            id="message-timestamp-1237344032351588352"><i
                                                className="separator__31fcc" aria-hidden="true"> — </i>今日 19:03</time></span></h3>
                                <div id="message-content-1237344032351588352" className="markup_a7e664 messageContent_abea64">
                                    <span>親指下に下げながら、ふくらはぎに本気で力入れてみて</span></div>
                            </div>
                            <div id="message-accessories-1237344032351588352" className="container__62863"></div>
                            <div className="buttonContainer__6de7e">
                                <div className="buttons__36852 container__2f489 isHeader_db0644" role="group" aria-label="メッセージ操作">
                                    <div className="buttonsInner_a9dfff wrapper__4e6b6">
                                        <div className="button_d4bf9b" aria-label="リアクションを付ける" aria-expanded="false" role="button">
                                            <svg className="icon__1a2d2" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="18" height="18" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 0 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="返信" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M2.3 7.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L5.42 9H11a7 7 0 0 1 7 7v4a1 1 0 1 0 2 0v-4a9 9 0 0 0-9-9H5.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z"
                                                    className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="スレッドを作成" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36ZM15.66 16.8a1 1 0 0 1-1.38.28l-8.49-5.66A1 1 0 1 1 6.9 9.76l8.49 5.65a1 1 0 0 1 .27 1.39ZM17.1 14.25a1 1 0 1 0 1.11-1.66L9.73 6.93a1 1 0 0 0-1.11 1.66l8.49 5.66Z"
                                                    fill="currentColor" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="その他" aria-expanded="false" role="button"><svg
                                                className="icon_e3aee9" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li id="chat-messages-706861709377142859-1237344032351588352" className="messageListItem__050f9">
                        <div className="message_ccca67 cozyMessage__9f4fd groupStart__7b93c wrapper_a62503 cozy_f5c119 zalgo__39311"
                            role="article"
                            aria-roledescription="メッセージ"
                            aria-labelledby="message-username-1237344032351588352 uid_1 message-content-1237344032351588352 uid_2 message-timestamp-1237344032351588352">
                            <div className="contents_d3ae0d">
                                    <Image
                                        src="https://cdn.discordapp.com/avatars/1176787787383582733/8fc2aa2b27003f8a08768a6b72a480fa.webp?size=100"
                                        aria-hidden="true"
                                        className="avatar__08316 clickable__09456"
                                        width="20"
                                        height="20"
                                        alt=" ">
                                    </Image>
                                <h3 className="header__6a14d"
                                    aria-labelledby="message-username-1237344032351588352 message-timestamp-1237344032351588352"><span
                                        id="message-username-1237344032351588352" className="headerText_bd68ec hasRoleIcon__74079"><span
                                            className="username__0b0e7 desaturateUserColors_eb6bd2 clickable__09456" aria-expanded="false"
                                            role="button" style={{color: "rgb(106, 90, 205)"}}>411ll</span><span><span className=""
                                                role="button">
                                                    <Image alt="" aria-label="ロールアイコン、Tier III"
                                                    className="roleIcon__92480 roleIcon_b6fe3d clickable__5ba8f" height="20"
                                                    src="https://cdn.discordapp.com/role-icons/958656946561495112/1bf63a8649fbba72b21021c5f4fdd855.webp?size=28&amp;quality=lossless"
                                                    width="20">
                                                    </Image></span></span></span><span
                                        className="timestamp_c79dd2 timestampInline__430cf"><time aria-label="今日 19:03"
                                            id="message-timestamp-1237344032351588352"><i
                                                className="separator__31fcc" aria-hidden="true"> — </i>今日 19:03</time></span></h3>
                                <div id="message-content-1237344032351588352" className="markup_a7e664 messageContent_abea64">
                                    <span>親指下に下げながら、ふくらはぎに本気で力入れてみて</span></div>
                            </div>
                            <div id="message-accessories-1237344032351588352" className="container__62863"></div>
                            <div className="buttonContainer__6de7e">
                                <div className="buttons__36852 container__2f489 isHeader_db0644" role="group" aria-label="メッセージ操作">
                                    <div className="buttonsInner_a9dfff wrapper__4e6b6">
                                        <div className="button_d4bf9b" aria-label="リアクションを付ける" aria-expanded="false" role="button">
                                            <svg className="icon__1a2d2" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="18" height="18" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 0 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="返信" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M2.3 7.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L5.42 9H11a7 7 0 0 1 7 7v4a1 1 0 1 0 2 0v-4a9 9 0 0 0-9-9H5.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z"
                                                    className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="スレッドを作成" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36ZM15.66 16.8a1 1 0 0 1-1.38.28l-8.49-5.66A1 1 0 1 1 6.9 9.76l8.49 5.65a1 1 0 0 1 .27 1.39ZM17.1 14.25a1 1 0 1 0 1.11-1.66L9.73 6.93a1 1 0 0 0-1.11 1.66l8.49 5.66Z"
                                                    fill="currentColor" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="その他" aria-expanded="false" role="button"><svg
                                                className="icon_e3aee9" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li id="chat-messages-706861709377142859-1237344032351588352" className="messageListItem__050f9">
                        <div className="message_ccca67 cozyMessage__9f4fd groupStart__7b93c wrapper_a62503 cozy_f5c119 zalgo__39311"
                            role="article"
                            aria-roledescription="メッセージ"
                            aria-labelledby="message-username-1237344032351588352 uid_1 message-content-1237344032351588352 uid_2 message-timestamp-1237344032351588352">
                            <div className="contents_d3ae0d">
                                    <Image
                                        src="https://cdn.discordapp.com/avatars/1176787787383582733/8fc2aa2b27003f8a08768a6b72a480fa.webp?size=100"
                                        aria-hidden="true"
                                        className="avatar__08316 clickable__09456"
                                        width="20"
                                        height="20"
                                        alt=" ">
                                    </Image>
                                <h3 className="header__6a14d"
                                    aria-labelledby="message-username-1237344032351588352 message-timestamp-1237344032351588352"><span
                                        id="message-username-1237344032351588352" className="headerText_bd68ec hasRoleIcon__74079"><span
                                            className="username__0b0e7 desaturateUserColors_eb6bd2 clickable__09456" aria-expanded="false"
                                            role="button" style={{color: "rgb(106, 90, 205)"}}>411ll</span><span><span className=""
                                                role="button">
                                                    <Image alt="" aria-label="ロールアイコン、Tier III"
                                                    className="roleIcon__92480 roleIcon_b6fe3d clickable__5ba8f" height="20"
                                                    src="https://cdn.discordapp.com/role-icons/958656946561495112/1bf63a8649fbba72b21021c5f4fdd855.webp?size=28&amp;quality=lossless"
                                                    width="20">
                                                    </Image></span></span></span><span
                                        className="timestamp_c79dd2 timestampInline__430cf"><time aria-label="今日 19:03"
                                            id="message-timestamp-1237344032351588352"><i
                                                className="separator__31fcc" aria-hidden="true"> — </i>今日 19:03</time></span></h3>
                                <div id="message-content-1237344032351588352" className="markup_a7e664 messageContent_abea64">
                                    <span>親指下に下げながら、ふくらはぎに本気で力入れてみて</span></div>
                            </div>
                            <div id="message-accessories-1237344032351588352" className="container__62863"></div>
                            <div className="buttonContainer__6de7e">
                                <div className="buttons__36852 container__2f489 isHeader_db0644" role="group" aria-label="メッセージ操作">
                                    <div className="buttonsInner_a9dfff wrapper__4e6b6">
                                        <div className="button_d4bf9b" aria-label="リアクションを付ける" aria-expanded="false" role="button">
                                            <svg className="icon__1a2d2" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="18" height="18" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 0 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="返信" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M2.3 7.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L5.42 9H11a7 7 0 0 1 7 7v4a1 1 0 1 0 2 0v-4a9 9 0 0 0-9-9H5.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z"
                                                    className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="スレッドを作成" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36ZM15.66 16.8a1 1 0 0 1-1.38.28l-8.49-5.66A1 1 0 1 1 6.9 9.76l8.49 5.65a1 1 0 0 1 .27 1.39ZM17.1 14.25a1 1 0 1 0 1.11-1.66L9.73 6.93a1 1 0 0 0-1.11 1.66l8.49 5.66Z"
                                                    fill="currentColor" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="その他" aria-expanded="false" role="button"><svg
                                                className="icon_e3aee9" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li id="chat-messages-706861709377142859-1237344032351588352" className="messageListItem__050f9">
                        <div className="message_ccca67 cozyMessage__9f4fd groupStart__7b93c wrapper_a62503 cozy_f5c119 zalgo__39311"
                            role="article"
                            aria-roledescription="メッセージ"
                            aria-labelledby="message-username-1237344032351588352 uid_1 message-content-1237344032351588352 uid_2 message-timestamp-1237344032351588352">
                            <div className="contents_d3ae0d">
                                    <Image
                                        src="https://cdn.discordapp.com/avatars/1176787787383582733/8fc2aa2b27003f8a08768a6b72a480fa.webp?size=100"
                                        aria-hidden="true"
                                        className="avatar__08316 clickable__09456"
                                        width="20"
                                        height="20"
                                        alt=" ">
                                    </Image>
                                <h3 className="header__6a14d"
                                    aria-labelledby="message-username-1237344032351588352 message-timestamp-1237344032351588352"><span
                                        id="message-username-1237344032351588352" className="headerText_bd68ec hasRoleIcon__74079"><span
                                            className="username__0b0e7 desaturateUserColors_eb6bd2 clickable__09456" aria-expanded="false"
                                            role="button" style={{color: "rgb(106, 90, 205)"}}>411ll</span><span><span className=""
                                                role="button">
                                                    <Image alt="" aria-label="ロールアイコン、Tier III"
                                                    className="roleIcon__92480 roleIcon_b6fe3d clickable__5ba8f" height="20"
                                                    src="https://cdn.discordapp.com/role-icons/958656946561495112/1bf63a8649fbba72b21021c5f4fdd855.webp?size=28&amp;quality=lossless"
                                                    width="20">
                                                    </Image></span></span></span><span
                                        className="timestamp_c79dd2 timestampInline__430cf"><time aria-label="今日 19:03"
                                            id="message-timestamp-1237344032351588352"><i
                                                className="separator__31fcc" aria-hidden="true"> — </i>今日 19:03</time></span></h3>
                                <div id="message-content-1237344032351588352" className="markup_a7e664 messageContent_abea64">
                                    <span>親指下に下げながら、ふくらはぎに本気で力入れてみて</span></div>
                            </div>
                            <div id="message-accessories-1237344032351588352" className="container__62863"></div>
                            <div className="buttonContainer__6de7e">
                                <div className="buttons__36852 container__2f489 isHeader_db0644" role="group" aria-label="メッセージ操作">
                                    <div className="buttonsInner_a9dfff wrapper__4e6b6">
                                        <div className="button_d4bf9b" aria-label="リアクションを付ける" aria-expanded="false" role="button">
                                            <svg className="icon__1a2d2" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="18" height="18" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 0 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="返信" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M2.3 7.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L5.42 9H11a7 7 0 0 1 7 7v4a1 1 0 1 0 2 0v-4a9 9 0 0 0-9-9H5.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z"
                                                    className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="スレッドを作成" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36ZM15.66 16.8a1 1 0 0 1-1.38.28l-8.49-5.66A1 1 0 1 1 6.9 9.76l8.49 5.65a1 1 0 0 1 .27 1.39ZM17.1 14.25a1 1 0 1 0 1.11-1.66L9.73 6.93a1 1 0 0 0-1.11 1.66l8.49 5.66Z"
                                                    fill="currentColor" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="その他" aria-expanded="false" role="button"><svg
                                                className="icon_e3aee9" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li id="chat-messages-706861709377142859-1237344032351588352" className="messageListItem__050f9">
                        <div className="message_ccca67 cozyMessage__9f4fd groupStart__7b93c wrapper_a62503 cozy_f5c119 zalgo__39311"
                            role="article"
                            aria-roledescription="メッセージ"
                            aria-labelledby="message-username-1237344032351588352 uid_1 message-content-1237344032351588352 uid_2 message-timestamp-1237344032351588352">
                            <div className="contents_d3ae0d">
                                    <Image
                                        src="https://cdn.discordapp.com/avatars/1176787787383582733/8fc2aa2b27003f8a08768a6b72a480fa.webp?size=100"
                                        aria-hidden="true"
                                        className="avatar__08316 clickable__09456"
                                        width="20"
                                        height="20"
                                        alt=" ">
                                    </Image>
                                <h3 className="header__6a14d"
                                    aria-labelledby="message-username-1237344032351588352 message-timestamp-1237344032351588352"><span
                                        id="message-username-1237344032351588352" className="headerText_bd68ec hasRoleIcon__74079"><span
                                            className="username__0b0e7 desaturateUserColors_eb6bd2 clickable__09456" aria-expanded="false"
                                            role="button" style={{color: "rgb(106, 90, 205)"}}>411ll</span><span><span className=""
                                                role="button">
                                                    <Image alt="" aria-label="ロールアイコン、Tier III"
                                                    className="roleIcon__92480 roleIcon_b6fe3d clickable__5ba8f" height="20"
                                                    src="https://cdn.discordapp.com/role-icons/958656946561495112/1bf63a8649fbba72b21021c5f4fdd855.webp?size=28&amp;quality=lossless"
                                                    width="20">
                                                    </Image></span></span></span><span
                                        className="timestamp_c79dd2 timestampInline__430cf"><time aria-label="今日 19:03"
                                            id="message-timestamp-1237344032351588352"><i
                                                className="separator__31fcc" aria-hidden="true"> — </i>今日 19:03</time></span></h3>
                                <div id="message-content-1237344032351588352" className="markup_a7e664 messageContent_abea64">
                                    <span>親指下に下げながら、ふくらはぎに本気で力入れてみて</span></div>
                            </div>
                            <div id="message-accessories-1237344032351588352" className="container__62863"></div>
                            <div className="buttonContainer__6de7e">
                                <div className="buttons__36852 container__2f489 isHeader_db0644" role="group" aria-label="メッセージ操作">
                                    <div className="buttonsInner_a9dfff wrapper__4e6b6">
                                        <div className="button_d4bf9b" aria-label="リアクションを付ける" aria-expanded="false" role="button">
                                            <svg className="icon__1a2d2" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="18" height="18" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 0 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="返信" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M2.3 7.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L5.42 9H11a7 7 0 0 1 7 7v4a1 1 0 1 0 2 0v-4a9 9 0 0 0-9-9H5.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z"
                                                    className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="スレッドを作成" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36ZM15.66 16.8a1 1 0 0 1-1.38.28l-8.49-5.66A1 1 0 1 1 6.9 9.76l8.49 5.65a1 1 0 0 1 .27 1.39ZM17.1 14.25a1 1 0 1 0 1.11-1.66L9.73 6.93a1 1 0 0 0-1.11 1.66l8.49 5.66Z"
                                                    fill="currentColor" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="その他" aria-expanded="false" role="button"><svg
                                                className="icon_e3aee9" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li id="chat-messages-706861709377142859-1237344032351588352" className="messageListItem__050f9">
                        <div className="message_ccca67 cozyMessage__9f4fd groupStart__7b93c wrapper_a62503 cozy_f5c119 zalgo__39311"
                            role="article"
                            aria-roledescription="メッセージ"
                            aria-labelledby="message-username-1237344032351588352 uid_1 message-content-1237344032351588352 uid_2 message-timestamp-1237344032351588352">
                            <div className="contents_d3ae0d">
                                    <Image
                                        src="https://cdn.discordapp.com/avatars/1176787787383582733/8fc2aa2b27003f8a08768a6b72a480fa.webp?size=100"
                                        aria-hidden="true"
                                        className="avatar__08316 clickable__09456"
                                        width="20"
                                        height="20"
                                        alt=" ">
                                    </Image>
                                <h3 className="header__6a14d"
                                    aria-labelledby="message-username-1237344032351588352 message-timestamp-1237344032351588352"><span
                                        id="message-username-1237344032351588352" className="headerText_bd68ec hasRoleIcon__74079"><span
                                            className="username__0b0e7 desaturateUserColors_eb6bd2 clickable__09456" aria-expanded="false"
                                            role="button" style={{color: "rgb(106, 90, 205)"}}>411ll</span><span><span className=""
                                                role="button">
                                                    <Image alt="" aria-label="ロールアイコン、Tier III"
                                                    className="roleIcon__92480 roleIcon_b6fe3d clickable__5ba8f" height="20"
                                                    src="https://cdn.discordapp.com/role-icons/958656946561495112/1bf63a8649fbba72b21021c5f4fdd855.webp?size=28&amp;quality=lossless"
                                                    width="20">
                                                    </Image></span></span></span><span
                                        className="timestamp_c79dd2 timestampInline__430cf"><time aria-label="今日 19:03"
                                            id="message-timestamp-1237344032351588352"><i
                                                className="separator__31fcc" aria-hidden="true"> — </i>今日 19:03</time></span></h3>
                                <div id="message-content-1237344032351588352" className="markup_a7e664 messageContent_abea64">
                                    <span>親指下に下げながら、ふくらはぎに本気で力入れてみて</span></div>
                            </div>
                            <div id="message-accessories-1237344032351588352" className="container__62863"></div>
                            <div className="buttonContainer__6de7e">
                                <div className="buttons__36852 container__2f489 isHeader_db0644" role="group" aria-label="メッセージ操作">
                                    <div className="buttonsInner_a9dfff wrapper__4e6b6">
                                        <div className="button_d4bf9b" aria-label="リアクションを付ける" aria-expanded="false" role="button">
                                            <svg className="icon__1a2d2" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="18" height="18" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 0 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="返信" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M2.3 7.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L5.42 9H11a7 7 0 0 1 7 7v4a1 1 0 1 0 2 0v-4a9 9 0 0 0-9-9H5.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z"
                                                    className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="スレッドを作成" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36ZM15.66 16.8a1 1 0 0 1-1.38.28l-8.49-5.66A1 1 0 1 1 6.9 9.76l8.49 5.65a1 1 0 0 1 .27 1.39ZM17.1 14.25a1 1 0 1 0 1.11-1.66L9.73 6.93a1 1 0 0 0-1.11 1.66l8.49 5.66Z"
                                                    fill="currentColor" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="その他" aria-expanded="false" role="button"><svg
                                                className="icon_e3aee9" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li id="chat-messages-706861709377142859-1237344032351588352" className="messageListItem__050f9">
                        <div className="message_ccca67 cozyMessage__9f4fd groupStart__7b93c wrapper_a62503 cozy_f5c119 zalgo__39311"
                            role="article"
                            aria-roledescription="メッセージ"
                            aria-labelledby="message-username-1237344032351588352 uid_1 message-content-1237344032351588352 uid_2 message-timestamp-1237344032351588352">
                            <div className="contents_d3ae0d">
                                    <Image
                                        src="https://cdn.discordapp.com/avatars/1176787787383582733/8fc2aa2b27003f8a08768a6b72a480fa.webp?size=100"
                                        aria-hidden="true"
                                        className="avatar__08316 clickable__09456"
                                        width="20"
                                        height="20"
                                        alt=" ">
                                    </Image>
                                <h3 className="header__6a14d"
                                    aria-labelledby="message-username-1237344032351588352 message-timestamp-1237344032351588352"><span
                                        id="message-username-1237344032351588352" className="headerText_bd68ec hasRoleIcon__74079"><span
                                            className="username__0b0e7 desaturateUserColors_eb6bd2 clickable__09456" aria-expanded="false"
                                            role="button" style={{color: "rgb(106, 90, 205)"}}>411ll</span><span><span className=""
                                                role="button">
                                                    <Image alt="" aria-label="ロールアイコン、Tier III"
                                                    className="roleIcon__92480 roleIcon_b6fe3d clickable__5ba8f" height="20"
                                                    src="https://cdn.discordapp.com/role-icons/958656946561495112/1bf63a8649fbba72b21021c5f4fdd855.webp?size=28&amp;quality=lossless"
                                                    width="20">
                                                    </Image></span></span></span><span
                                        className="timestamp_c79dd2 timestampInline__430cf"><time aria-label="今日 19:03"
                                            id="message-timestamp-1237344032351588352"><i
                                                className="separator__31fcc" aria-hidden="true"> — </i>今日 19:03</time></span></h3>
                                <div id="message-content-1237344032351588352" className="markup_a7e664 messageContent_abea64">
                                    <span>親指下に下げながら、ふくらはぎに本気で力入れてみて</span></div>
                            </div>
                            <div id="message-accessories-1237344032351588352" className="container__62863"></div>
                            <div className="buttonContainer__6de7e">
                                <div className="buttons__36852 container__2f489 isHeader_db0644" role="group" aria-label="メッセージ操作">
                                    <div className="buttonsInner_a9dfff wrapper__4e6b6">
                                        <div className="button_d4bf9b" aria-label="リアクションを付ける" aria-expanded="false" role="button">
                                            <svg className="icon__1a2d2" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="18" height="18" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 0 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="返信" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M2.3 7.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L5.42 9H11a7 7 0 0 1 7 7v4a1 1 0 1 0 2 0v-4a9 9 0 0 0-9-9H5.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z"
                                                    className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="スレッドを作成" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36ZM15.66 16.8a1 1 0 0 1-1.38.28l-8.49-5.66A1 1 0 1 1 6.9 9.76l8.49 5.65a1 1 0 0 1 .27 1.39ZM17.1 14.25a1 1 0 1 0 1.11-1.66L9.73 6.93a1 1 0 0 0-1.11 1.66l8.49 5.66Z"
                                                    fill="currentColor" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="その他" aria-expanded="false" role="button"><svg
                                                className="icon_e3aee9" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li id="chat-messages-706861709377142859-1237344032351588352" className="messageListItem__050f9">
                        <div className="message_ccca67 cozyMessage__9f4fd groupStart__7b93c wrapper_a62503 cozy_f5c119 zalgo__39311"
                            role="article"
                            aria-roledescription="メッセージ"
                            aria-labelledby="message-username-1237344032351588352 uid_1 message-content-1237344032351588352 uid_2 message-timestamp-1237344032351588352">
                            <div className="contents_d3ae0d">
                                    <Image
                                        src="https://cdn.discordapp.com/avatars/1176787787383582733/8fc2aa2b27003f8a08768a6b72a480fa.webp?size=100"
                                        aria-hidden="true"
                                        className="avatar__08316 clickable__09456"
                                        width="20"
                                        height="20"
                                        alt=" ">
                                    </Image>
                                <h3 className="header__6a14d"
                                    aria-labelledby="message-username-1237344032351588352 message-timestamp-1237344032351588352"><span
                                        id="message-username-1237344032351588352" className="headerText_bd68ec hasRoleIcon__74079"><span
                                            className="username__0b0e7 desaturateUserColors_eb6bd2 clickable__09456" aria-expanded="false"
                                            role="button" style={{color: "rgb(106, 90, 205)"}}>411ll</span><span><span className=""
                                                role="button">
                                                    <Image alt="" aria-label="ロールアイコン、Tier III"
                                                    className="roleIcon__92480 roleIcon_b6fe3d clickable__5ba8f" height="20"
                                                    src="https://cdn.discordapp.com/role-icons/958656946561495112/1bf63a8649fbba72b21021c5f4fdd855.webp?size=28&amp;quality=lossless"
                                                    width="20">
                                                    </Image></span></span></span><span
                                        className="timestamp_c79dd2 timestampInline__430cf"><time aria-label="今日 19:03"
                                            id="message-timestamp-1237344032351588352"><i
                                                className="separator__31fcc" aria-hidden="true"> — </i>今日 19:03</time></span></h3>
                                <div id="message-content-1237344032351588352" className="markup_a7e664 messageContent_abea64">
                                    <span>親指下に下げながら、ふくらはぎに本気で力入れてみて</span></div>
                            </div>
                            <div id="message-accessories-1237344032351588352" className="container__62863"></div>
                            <div className="buttonContainer__6de7e">
                                <div className="buttons__36852 container__2f489 isHeader_db0644" role="group" aria-label="メッセージ操作">
                                    <div className="buttonsInner_a9dfff wrapper__4e6b6">
                                        <div className="button_d4bf9b" aria-label="リアクションを付ける" aria-expanded="false" role="button">
                                            <svg className="icon__1a2d2" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="18" height="18" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 0 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="返信" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M2.3 7.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L5.42 9H11a7 7 0 0 1 7 7v4a1 1 0 1 0 2 0v-4a9 9 0 0 0-9-9H5.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z"
                                                    className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="スレッドを作成" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36ZM15.66 16.8a1 1 0 0 1-1.38.28l-8.49-5.66A1 1 0 1 1 6.9 9.76l8.49 5.65a1 1 0 0 1 .27 1.39ZM17.1 14.25a1 1 0 1 0 1.11-1.66L9.73 6.93a1 1 0 0 0-1.11 1.66l8.49 5.66Z"
                                                    fill="currentColor" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="その他" aria-expanded="false" role="button"><svg
                                                className="icon_e3aee9" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li id="chat-messages-706861709377142859-1237344032351588352" className="messageListItem__050f9">
                        <div className="message_ccca67 cozyMessage__9f4fd groupStart__7b93c wrapper_a62503 cozy_f5c119 zalgo__39311"
                            role="article"
                            aria-roledescription="メッセージ"
                            aria-labelledby="message-username-1237344032351588352 uid_1 message-content-1237344032351588352 uid_2 message-timestamp-1237344032351588352">
                            <div className="contents_d3ae0d">
                                    <Image
                                        src="https://cdn.discordapp.com/avatars/1176787787383582733/8fc2aa2b27003f8a08768a6b72a480fa.webp?size=100"
                                        aria-hidden="true"
                                        className="avatar__08316 clickable__09456"
                                        width="20"
                                        height="20"
                                        alt=" ">
                                    </Image>
                                <h3 className="header__6a14d"
                                    aria-labelledby="message-username-1237344032351588352 message-timestamp-1237344032351588352"><span
                                        id="message-username-1237344032351588352" className="headerText_bd68ec hasRoleIcon__74079"><span
                                            className="username__0b0e7 desaturateUserColors_eb6bd2 clickable__09456" aria-expanded="false"
                                            role="button" style={{color: "rgb(106, 90, 205)"}}>411ll</span><span><span className=""
                                                role="button">
                                                    <Image alt="" aria-label="ロールアイコン、Tier III"
                                                    className="roleIcon__92480 roleIcon_b6fe3d clickable__5ba8f" height="20"
                                                    src="https://cdn.discordapp.com/role-icons/958656946561495112/1bf63a8649fbba72b21021c5f4fdd855.webp?size=28&amp;quality=lossless"
                                                    width="20">
                                                    </Image></span></span></span><span
                                        className="timestamp_c79dd2 timestampInline__430cf"><time aria-label="今日 19:03"
                                            id="message-timestamp-1237344032351588352"><i
                                                className="separator__31fcc" aria-hidden="true"> — </i>今日 19:03</time></span></h3>
                                <div id="message-content-1237344032351588352" className="markup_a7e664 messageContent_abea64">
                                    <span>親指下に下げながら、ふくらはぎに本気で力入れてみて</span></div>
                            </div>
                            <div id="message-accessories-1237344032351588352" className="container__62863"></div>
                            <div className="buttonContainer__6de7e">
                                <div className="buttons__36852 container__2f489 isHeader_db0644" role="group" aria-label="メッセージ操作">
                                    <div className="buttonsInner_a9dfff wrapper__4e6b6">
                                        <div className="button_d4bf9b" aria-label="リアクションを付ける" aria-expanded="false" role="button">
                                            <svg className="icon__1a2d2" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="18" height="18" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 0 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="返信" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M2.3 7.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L5.42 9H11a7 7 0 0 1 7 7v4a1 1 0 1 0 2 0v-4a9 9 0 0 0-9-9H5.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z"
                                                    className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="スレッドを作成" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36ZM15.66 16.8a1 1 0 0 1-1.38.28l-8.49-5.66A1 1 0 1 1 6.9 9.76l8.49 5.65a1 1 0 0 1 .27 1.39ZM17.1 14.25a1 1 0 1 0 1.11-1.66L9.73 6.93a1 1 0 0 0-1.11 1.66l8.49 5.66Z"
                                                    fill="currentColor" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="その他" aria-expanded="false" role="button"><svg
                                                className="icon_e3aee9" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li id="chat-messages-706861709377142859-1237344032351588352" className="messageListItem__050f9">
                        <div className="message_ccca67 cozyMessage__9f4fd groupStart__7b93c wrapper_a62503 cozy_f5c119 zalgo__39311"
                            role="article"
                            aria-roledescription="メッセージ"
                            aria-labelledby="message-username-1237344032351588352 uid_1 message-content-1237344032351588352 uid_2 message-timestamp-1237344032351588352">
                            <div className="contents_d3ae0d">
                                    <Image
                                        src="https://cdn.discordapp.com/avatars/1176787787383582733/8fc2aa2b27003f8a08768a6b72a480fa.webp?size=100"
                                        aria-hidden="true"
                                        className="avatar__08316 clickable__09456"
                                        width="20"
                                        height="20"
                                        alt=" ">
                                    </Image>
                                <h3 className="header__6a14d"
                                    aria-labelledby="message-username-1237344032351588352 message-timestamp-1237344032351588352"><span
                                        id="message-username-1237344032351588352" className="headerText_bd68ec hasRoleIcon__74079"><span
                                            className="username__0b0e7 desaturateUserColors_eb6bd2 clickable__09456" aria-expanded="false"
                                            role="button" style={{color: "rgb(106, 90, 205)"}}>411ll</span><span><span className=""
                                                role="button">
                                                    <Image alt="" aria-label="ロールアイコン、Tier III"
                                                    className="roleIcon__92480 roleIcon_b6fe3d clickable__5ba8f" height="20"
                                                    src="https://cdn.discordapp.com/role-icons/958656946561495112/1bf63a8649fbba72b21021c5f4fdd855.webp?size=28&amp;quality=lossless"
                                                    width="20">
                                                    </Image></span></span></span><span
                                        className="timestamp_c79dd2 timestampInline__430cf"><time aria-label="今日 19:03"
                                            id="message-timestamp-1237344032351588352"><i
                                                className="separator__31fcc" aria-hidden="true"> — </i>今日 19:03</time></span></h3>
                                <div id="message-content-1237344032351588352" className="markup_a7e664 messageContent_abea64">
                                    <span>親指下に下げながら、ふくらはぎに本気で力入れてみて</span></div>
                            </div>
                            <div id="message-accessories-1237344032351588352" className="container__62863"></div>
                            <div className="buttonContainer__6de7e">
                                <div className="buttons__36852 container__2f489 isHeader_db0644" role="group" aria-label="メッセージ操作">
                                    <div className="buttonsInner_a9dfff wrapper__4e6b6">
                                        <div className="button_d4bf9b" aria-label="リアクションを付ける" aria-expanded="false" role="button">
                                            <svg className="icon__1a2d2" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="18" height="18" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 0 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="返信" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M2.3 7.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L5.42 9H11a7 7 0 0 1 7 7v4a1 1 0 1 0 2 0v-4a9 9 0 0 0-9-9H5.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z"
                                                    className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="スレッドを作成" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36ZM15.66 16.8a1 1 0 0 1-1.38.28l-8.49-5.66A1 1 0 1 1 6.9 9.76l8.49 5.65a1 1 0 0 1 .27 1.39ZM17.1 14.25a1 1 0 1 0 1.11-1.66L9.73 6.93a1 1 0 0 0-1.11 1.66l8.49 5.66Z"
                                                    fill="currentColor" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="その他" aria-expanded="false" role="button"><svg
                                                className="icon_e3aee9" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li id="chat-messages-706861709377142859-1237344032351588352" className="messageListItem__050f9">
                        <div className="message_ccca67 cozyMessage__9f4fd groupStart__7b93c wrapper_a62503 cozy_f5c119 zalgo__39311"
                            role="article"
                            aria-roledescription="メッセージ"
                            aria-labelledby="message-username-1237344032351588352 uid_1 message-content-1237344032351588352 uid_2 message-timestamp-1237344032351588352">
                            <div className="contents_d3ae0d">
                                    <Image
                                        src="https://cdn.discordapp.com/avatars/1176787787383582733/8fc2aa2b27003f8a08768a6b72a480fa.webp?size=100"
                                        aria-hidden="true"
                                        className="avatar__08316 clickable__09456"
                                        width="20"
                                        height="20"
                                        alt=" ">
                                    </Image>
                                <h3 className="header__6a14d"
                                    aria-labelledby="message-username-1237344032351588352 message-timestamp-1237344032351588352"><span
                                        id="message-username-1237344032351588352" className="headerText_bd68ec hasRoleIcon__74079"><span
                                            className="username__0b0e7 desaturateUserColors_eb6bd2 clickable__09456" aria-expanded="false"
                                            role="button" style={{color: "rgb(106, 90, 205)"}}>411ll</span><span><span className=""
                                                role="button">
                                                    <Image alt="" aria-label="ロールアイコン、Tier III"
                                                    className="roleIcon__92480 roleIcon_b6fe3d clickable__5ba8f" height="20"
                                                    src="https://cdn.discordapp.com/role-icons/958656946561495112/1bf63a8649fbba72b21021c5f4fdd855.webp?size=28&amp;quality=lossless"
                                                    width="20">
                                                    </Image></span></span></span><span
                                        className="timestamp_c79dd2 timestampInline__430cf"><time aria-label="今日 19:03"
                                            id="message-timestamp-1237344032351588352"><i
                                                className="separator__31fcc" aria-hidden="true"> — </i>今日 19:03</time></span></h3>
                                <div id="message-content-1237344032351588352" className="markup_a7e664 messageContent_abea64">
                                    <span>親指下に下げながら、ふくらはぎに本気で力入れてみて</span></div>
                            </div>
                            <div id="message-accessories-1237344032351588352" className="container__62863"></div>
                            <div className="buttonContainer__6de7e">
                                <div className="buttons__36852 container__2f489 isHeader_db0644" role="group" aria-label="メッセージ操作">
                                    <div className="buttonsInner_a9dfff wrapper__4e6b6">
                                        <div className="button_d4bf9b" aria-label="リアクションを付ける" aria-expanded="false" role="button">
                                            <svg className="icon__1a2d2" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="18" height="18" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 0 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="返信" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M2.3 7.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L5.42 9H11a7 7 0 0 1 7 7v4a1 1 0 1 0 2 0v-4a9 9 0 0 0-9-9H5.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z"
                                                    className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="スレッドを作成" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36ZM15.66 16.8a1 1 0 0 1-1.38.28l-8.49-5.66A1 1 0 1 1 6.9 9.76l8.49 5.65a1 1 0 0 1 .27 1.39ZM17.1 14.25a1 1 0 1 0 1.11-1.66L9.73 6.93a1 1 0 0 0-1.11 1.66l8.49 5.66Z"
                                                    fill="currentColor" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="その他" aria-expanded="false" role="button"><svg
                                                className="icon_e3aee9" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li id="chat-messages-706861709377142859-1237344032351588352" className="messageListItem__050f9">
                        <div className="message_ccca67 cozyMessage__9f4fd groupStart__7b93c wrapper_a62503 cozy_f5c119 zalgo__39311"
                            role="article"
                            aria-roledescription="メッセージ"
                            aria-labelledby="message-username-1237344032351588352 uid_1 message-content-1237344032351588352 uid_2 message-timestamp-1237344032351588352">
                            <div className="contents_d3ae0d">
                                    <Image
                                        src="https://cdn.discordapp.com/avatars/1176787787383582733/8fc2aa2b27003f8a08768a6b72a480fa.webp?size=100"
                                        aria-hidden="true"
                                        className="avatar__08316 clickable__09456"
                                        width="20"
                                        height="20"
                                        alt=" ">
                                    </Image>
                                <h3 className="header__6a14d"
                                    aria-labelledby="message-username-1237344032351588352 message-timestamp-1237344032351588352"><span
                                        id="message-username-1237344032351588352" className="headerText_bd68ec hasRoleIcon__74079"><span
                                            className="username__0b0e7 desaturateUserColors_eb6bd2 clickable__09456" aria-expanded="false"
                                            role="button" style={{color: "rgb(106, 90, 205)"}}>411ll</span><span><span className=""
                                                role="button">
                                                    <Image alt="" aria-label="ロールアイコン、Tier III"
                                                    className="roleIcon__92480 roleIcon_b6fe3d clickable__5ba8f" height="20"
                                                    src="https://cdn.discordapp.com/role-icons/958656946561495112/1bf63a8649fbba72b21021c5f4fdd855.webp?size=28&amp;quality=lossless"
                                                    width="20">
                                                    </Image></span></span></span><span
                                        className="timestamp_c79dd2 timestampInline__430cf"><time aria-label="今日 19:03"
                                            id="message-timestamp-1237344032351588352"><i
                                                className="separator__31fcc" aria-hidden="true"> — </i>今日 19:03</time></span></h3>
                                <div id="message-content-1237344032351588352" className="markup_a7e664 messageContent_abea64">
                                    <span>親指下に下げながら、ふくらはぎに本気で力入れてみて</span></div>
                            </div>
                            <div id="message-accessories-1237344032351588352" className="container__62863"></div>
                            <div className="buttonContainer__6de7e">
                                <div className="buttons__36852 container__2f489 isHeader_db0644" role="group" aria-label="メッセージ操作">
                                    <div className="buttonsInner_a9dfff wrapper__4e6b6">
                                        <div className="button_d4bf9b" aria-label="リアクションを付ける" aria-expanded="false" role="button">
                                            <svg className="icon__1a2d2" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="18" height="18" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 0 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="返信" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M2.3 7.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L5.42 9H11a7 7 0 0 1 7 7v4a1 1 0 1 0 2 0v-4a9 9 0 0 0-9-9H5.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z"
                                                    className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="スレッドを作成" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36ZM15.66 16.8a1 1 0 0 1-1.38.28l-8.49-5.66A1 1 0 1 1 6.9 9.76l8.49 5.65a1 1 0 0 1 .27 1.39ZM17.1 14.25a1 1 0 1 0 1.11-1.66L9.73 6.93a1 1 0 0 0-1.11 1.66l8.49 5.66Z"
                                                    fill="currentColor" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="その他" aria-expanded="false" role="button"><svg
                                                className="icon_e3aee9" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li id="chat-messages-706861709377142859-1237344032351588352" className="messageListItem__050f9">
                        <div className="message_ccca67 cozyMessage__9f4fd groupStart__7b93c wrapper_a62503 cozy_f5c119 zalgo__39311"
                            role="article"
                            aria-roledescription="メッセージ"
                            aria-labelledby="message-username-1237344032351588352 uid_1 message-content-1237344032351588352 uid_2 message-timestamp-1237344032351588352">
                            <div className="contents_d3ae0d">
                                    <Image
                                        src="https://cdn.discordapp.com/avatars/1176787787383582733/8fc2aa2b27003f8a08768a6b72a480fa.webp?size=100"
                                        aria-hidden="true"
                                        className="avatar__08316 clickable__09456"
                                        width="20"
                                        height="20"
                                        alt=" ">
                                    </Image>
                                <h3 className="header__6a14d"
                                    aria-labelledby="message-username-1237344032351588352 message-timestamp-1237344032351588352"><span
                                        id="message-username-1237344032351588352" className="headerText_bd68ec hasRoleIcon__74079"><span
                                            className="username__0b0e7 desaturateUserColors_eb6bd2 clickable__09456" aria-expanded="false"
                                            role="button" style={{color: "rgb(106, 90, 205)"}}>411ll</span><span><span className=""
                                                role="button">
                                                    <Image alt="" aria-label="ロールアイコン、Tier III"
                                                    className="roleIcon__92480 roleIcon_b6fe3d clickable__5ba8f" height="20"
                                                    src="https://cdn.discordapp.com/role-icons/958656946561495112/1bf63a8649fbba72b21021c5f4fdd855.webp?size=28&amp;quality=lossless"
                                                    width="20">
                                                    </Image></span></span></span><span
                                        className="timestamp_c79dd2 timestampInline__430cf"><time aria-label="今日 19:03"
                                            id="message-timestamp-1237344032351588352"><i
                                                className="separator__31fcc" aria-hidden="true"> — </i>今日 19:03</time></span></h3>
                                <div id="message-content-1237344032351588352" className="markup_a7e664 messageContent_abea64">
                                    <span>親指下に下げながら、ふくらはぎに本気で力入れてみて</span></div>
                            </div>
                            <div id="message-accessories-1237344032351588352" className="container__62863"></div>
                            <div className="buttonContainer__6de7e">
                                <div className="buttons__36852 container__2f489 isHeader_db0644" role="group" aria-label="メッセージ操作">
                                    <div className="buttonsInner_a9dfff wrapper__4e6b6">
                                        <div className="button_d4bf9b" aria-label="リアクションを付ける" aria-expanded="false" role="button">
                                            <svg className="icon__1a2d2" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="18" height="18" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 0 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="返信" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M2.3 7.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L5.42 9H11a7 7 0 0 1 7 7v4a1 1 0 1 0 2 0v-4a9 9 0 0 0-9-9H5.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z"
                                                    className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="スレッドを作成" role="button"><svg className="icon_e3aee9"
                                                aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36ZM15.66 16.8a1 1 0 0 1-1.38.28l-8.49-5.66A1 1 0 1 1 6.9 9.76l8.49 5.65a1 1 0 0 1 .27 1.39ZM17.1 14.25a1 1 0 1 0 1.11-1.66L9.73 6.93a1 1 0 0 0-1.11 1.66l8.49 5.66Z"
                                                    fill="currentColor" className=""></path>
                                            </svg></div>
                                        <div className="button_d4bf9b" aria-label="その他" aria-expanded="false" role="button"><svg
                                                className="icon_e3aee9" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                                                    clip-rule="evenodd" className=""></path>
                                            </svg></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
          </div>
        </div>
        <form className="form_d8a4a1">
            <div className="channelTextArea_c2094b channelTextArea__648e5">
                <div className="scrollableContainer_ff917f themedBackground__3a4c0">
                    <div className="inner__9fd0b sansAttachButton__5f863">
                        <div className="uploadInput_aa27e8">
                          <input className="file-input" type="file" accept="" aria-hidden="true"/>
                        </div>
                        <div className="attachWrapper_d01704">
                            <button aria-expanded="false" aria-label="ファイルをアップロードするか招待を送信する" type="button"
                                className="attachButton__56f98 attachButton__5f6dc button__581d0 lookBlank_a5b4ca colorBrand__27d57 grow__4c8a4">
                                <div className="contents__322f4 attachButtonInner__84c26">
                                    <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" fill="none" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" fill="transparent" className="">
                                        </circle>
                                        <path fill="var(--interactive-normal)" fill-rule="evenodd"
                                            d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z"
                                            clip-rule="evenodd" className="attachButtonPlus_fd0021">
                                        </path>
                                    </svg>
                                </div>
                            </button>
                        </div>
                        <div className="textArea_a86690 textAreaSlate__8578d slateContainer__1d1fd">
                            <div>
                                <div className="placeholder_dec8c7 slateTextArea_b19976 fontSize16Padding_bcbeae"
                                    aria-hidden="true">#《🍷》メインチャットへメッセージを送信
                                </div>
                                <div role="textbox" aria-multiline="true" aria-haspopup="listbox"
                                    aria-invalid="false" aria-autocomplete="list"
                                    className="markup_a7e664 editor__66464 slateTextArea_cstm slateTextArea_b19976 fontSize16Padding_bcbeae"
                                    data-can-focus="true" aria-label="#《🍷》メインチャットへメッセージを送信"
                                    data-slate-editor="true" data-slate-node="value"
                                    >
                                    <div data-slate-node="element">
                                        <span data-slate-node="text">
                                            <span data-slate-leaf="true" className="emptyText__13589">
                                                <span data-slate-zero-width="n" data-slate-length="0">
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="buttons__7ecff">
                            <button aria-haspopup="dialog" aria-label="ギフトを贈る" type="button"
                                className="button__581d0 lookBlank_a5b4ca colorBrand__27d57 grow__4c8a4">
                                <div className="contents__322f4 button__437ce button__493d9">
                                    <div className="buttonWrapper_bd4bd7">
                                        <div className="lottieIcon_c7076c"
                                          >
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" preserveAspectRatio="xMidYMid meet">
                                                <defs>
                                                    <clipPath id="__lottie_element_8291">
                                                        <rect width="24" height="24" x="0" y="0">
                                                        </rect>
                                                    </clipPath>
                                                    <clipPath id="__lottie_element_8293">
                                                        <path d="M0,0 L600,0 L600,600 L0,600z">
                                                        </path>
                                                    </clipPath>
                                                </defs>
                                                <g clip-path="url(#__lottie_element_8291)">
                                                    <g clip-path="url(#__lottie_element_8293)"
                                                        transform="matrix(0.03999999910593033,0,0,0.03999999910593033,0,0)"
                                                        opacity="1">
                                                        <g transform="matrix(25,0,0,25,300,300)" opacity="1"
                                                            >
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(88,101,242)" fill-opacity="1"
                                                                    d=" M-7,10 C-8.104999542236328,10 -9,9.104999542236328 -9,8 C-9,8 -9,2.5 -9,2.5 C-9,2.2239999771118164 -8.776000022888184,2 -8.5,2 C-8.5,2 -1.5,2 -1.5,2 C-1.2239999771118164,2 -1,2.2239999771118164 -1,2.5 C-1,2.5 -1,9.5 -1,9.5 C-1,9.776000022888184 -1.2239999771118164,10 -1.5,10 C-1.5,10 -7,10 -7,10z M1,9.5 C1,9.776000022888184 1.2239999771118164,10 1.5,10 C1.5,10 7,10 7,10 C8.104999542236328,10 9,9.104999542236328 9,8 C9,8 9,2.5 9,2.5 C9,2.2239999771118164 8.776000022888184,2 8.5,2 C8.5,2 1.5,2 1.5,2 C1.2239999771118164,2 1,2.2239999771118164 1,2.5 C1,2.5 1,9.5 1,9.5z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g transform="matrix(25,0,0,25,300,300)" opacity="1"
                                                            >
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(88,101,242)" fill-opacity="1"
                                                                    d=" M-10,-2 C-10,-3.1050000190734863 -9.104999542236328,-4 -8,-4 C-8,-4 8,-4 8,-4 C9.104999542236328,-4 10,-3.1050000190734863 10,-2 C10,-2 10,-0.5 10,-0.5 C10,-0.2240000069141388 9.776000022888184,0 9.5,0 C9.5,0 -9.5,0 -9.5,0 C-9.776000022888184,0 -10,-0.2240000069141388 -10,-0.5 C-10,-0.5 -10,-2 -10,-2z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g transform="matrix(25,0,0,25,300,300)" opacity="1"
                                                            >
                                                            <path stroke-linecap="butt" stroke-linejoin="round"
                                                                fill-opacity="0" stroke="rgb(88,101,242)"
                                                                stroke-opacity="1" stroke-width="2"
                                                                d=" M7,-6 C7,-7.6570000648498535 5.6570000648498535,-9 4,-9 C4,-9 3.9110000133514404,-9 3.9110000133514404,-9 C2.49399995803833,-9 1.2589999437332153,-8.03600025177002 0.9150000214576721,-6.660999774932861 C0.9150000214576721,-6.660999774932861 0,-3 0,-3 C0,-3 4,-3 4,-3 C5.6570000648498535,-3 7,-4.3429999351501465 7,-6 C7,-6 7,-6 7,-6z">
                                                            </path>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                            </g>
                                                        </g>
                                                        <g transform="matrix(25,0,0,25,300,300)" opacity="1"
                                                          >
                                                            <path stroke-linecap="butt" stroke-linejoin="round"
                                                                fill-opacity="0" stroke="rgb(88,101,242)"
                                                                stroke-opacity="1" stroke-width="2"
                                                                d=" M-7,-6 C-7,-7.6570000648498535 -5.6570000648498535,-9 -4,-9 C-4,-9 -3.9110000133514404,-9 -3.9110000133514404,-9 C-2.49399995803833,-9 -1.2589999437332153,-8.03600025177002 -0.9150000214576721,-6.660999774932861 C-0.9150000214576721,-6.660999774932861 0,-3 0,-3 C0,-3 -4,-3 -4,-3 C-5.6570000648498535,-3 -7,-4.3429999351501465 -7,-6 C-7,-6 -7,-6 -7,-6z">
                                                            </path>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <div className="expression-picker-chat-input-button buttonContainer_ff1010">
                                <button aria-expanded="false" aria-haspopup="dialog" aria-controls="uid_5"
                                    aria-label="GIFピッカーを開く" type="button"
                                    className="button__581d0 lookBlank_a5b4ca colorBrand__27d57 grow__4c8a4">
                                    <div className="contents__322f4 button__437ce button__493d9">
                                        <div className="buttonWrapper_bd4bd7">
                                            <div className="lottieIcon_c7076c"
                                                >
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24" height="24" preserveAspectRatio="xMidYMid meet"
                                                    >
                                                    <defs>
                                                        <clipPath id="__lottie_element_8310">
                                                            <rect width="24" height="24" x="0" y="0">
                                                            </rect>
                                                        </clipPath>
                                                        <clipPath id="__lottie_element_8312">
                                                            <path d="M0,0 L600,0 L600,600 L0,600z">
                                                            </path>
                                                        </clipPath>
                                                        <g id="__lottie_element_8316">
                                                            <g clip-path="url(#__lottie_element_8320)"
                                                                transform="matrix(1,0,0,1,0,0)" opacity="1"
                                                                >
                                                                <g transform="matrix(25,0,0,25,300.0060119628906,299.99298095703125)"
                                                                    opacity="1">
                                                                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                        <path fill="rgb(255,255,255)" fill-opacity="1"
                                                                            d=" M3.0299999713897705,3.7190001010894775 C3.0299999713897705,3.7190001010894775 4.604000091552734,3.7190001010894775 4.604000091552734,3.7190001010894775 C4.604000091552734,3.7190001010894775 4.604000091552734,0.8949999809265137 4.604000091552734,0.8949999809265137 C4.604000091552734,0.8949999809265137 7.363999843597412,0.8949999809265137 7.363999843597412,0.8949999809265137 C7.363999843597412,0.8949999809265137 7.363999843597412,-0.5289999842643738 7.363999843597412,-0.5289999842643738 C7.363999843597412,-0.5289999842643738 4.604000091552734,-0.5289999842643738 4.604000091552734,-0.5289999842643738 C4.604000091552734,-0.5289999842643738 4.604000091552734,-2.2960000038146973 4.604000091552734,-2.2960000038146973 C4.604000091552734,-2.2960000038146973 8,-2.2960000038146973 8,-2.2960000038146973 C8,-2.2960000038146973 8,-3.7190001010894775 8,-3.7190001010894775 C8,-3.7190001010894775 3.0299999713897705,-3.7190001010894775 3.0299999713897705,-3.7190001010894775 C3.0299999713897705,-3.7190001010894775 3.0299999713897705,3.7190001010894775 3.0299999713897705,3.7190001010894775z">
                                                                        </path>
                                                                    </g>
                                                                </g>
                                                                <g transform="matrix(25,0,0,25,299.9960021972656,299.99298095703125)"
                                                                    opacity="1">
                                                                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                        <path fill="rgb(255,255,255)" fill-opacity="1"
                                                                            d=" M1.5199999809265137,3.7190001010894775 C1.5199999809265137,3.7190001010894775 -0.05400000140070915,3.7190001010894775 -0.05400000140070915,3.7190001010894775 C-0.05400000140070915,3.7190001010894775 -0.05400000140070915,-3.7190001010894775 -0.05400000140070915,-3.7190001010894775 C-0.05400000140070915,-3.7190001010894775 1.5199999809265137,-3.7190001010894775 1.5199999809265137,-3.7190001010894775 C1.5199999809265137,-3.7190001010894775 1.5199999809265137,3.7190001010894775 1.5199999809265137,3.7190001010894775z">
                                                                        </path>
                                                                    </g>
                                                                </g>
                                                                <g transform="matrix(25,0,0,25,299.9950256347656,299.99298095703125)"
                                                                    opacity="1">
                                                                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                        <path fill="rgb(255,255,255)" fill-opacity="1"
                                                                            d=" M-4.820000171661377,3.869999885559082 C-5.445000171661377,3.869999885559082 -5.998000144958496,3.7079999446868896 -6.480000019073486,3.384999990463257 C-6.961999893188477,3.062000036239624 -7.335000038146973,2.6080000400543213 -7.60099983215332,2.0260000228881836 C-7.867000102996826,1.437000036239624 -8,0.7620000243186951 -8,0 C-8,-0.7549999952316284 -7.860000133514404,-1.4229999780654907 -7.579999923706055,-2.005000114440918 C-7.293000221252441,-2.5869998931884766 -6.879000186920166,-3.0429999828338623 -6.340000152587891,-3.374000072479248 C-5.794000148773193,-3.7049999237060547 -5.144000053405762,-3.869999885559082 -4.388999938964844,-3.869999885559082 C-3.749000072479248,-3.869999885559082 -3.177999973297119,-3.7339999675750732 -2.674999952316284,-3.4609999656677246 C-2.1649999618530273,-3.187999963760376 -1.7799999713897705,-2.802999973297119 -1.5210000276565552,-2.306999921798706 C-1.5210000276565552,-2.306999921798706 -2.739000082015991,-1.434000015258789 -2.739000082015991,-1.434000015258789 C-3.1059999465942383,-2.109999895095825 -3.6519999504089355,-2.447000026702881 -4.377999782562256,-2.447000026702881 C-5.039000034332275,-2.447000026702881 -5.546000003814697,-2.2320001125335693 -5.8979997634887695,-1.8009999990463257 C-6.25,-1.3769999742507935 -6.426000118255615,-0.7760000228881836 -6.426000118255615,0 C-6.426000118255615,0.7829999923706055 -6.25,1.3869999647140503 -5.8979997634887695,1.8109999895095825 C-5.546000003814697,2.234999895095825 -5.039000034332275,2.447000026702881 -4.377999782562256,2.447000026702881 C-4.083000183105469,2.447000026702881 -3.812999963760376,2.3929998874664307 -3.569000005722046,2.2850000858306885 C-3.316999912261963,2.1700000762939453 -3.124000072479248,2.0160000324249268 -2.986999988555908,1.8220000267028809 C-2.986999988555908,1.8220000267028809 -2.986999988555908,0.8949999809265137 -2.986999988555908,0.8949999809265137 C-2.986999988555908,0.8949999809265137 -4.701000213623047,0.8949999809265137 -4.701000213623047,0.8949999809265137 C-4.701000213623047,0.8949999809265137 -4.701000213623047,-0.5070000290870667 -4.701000213623047,-0.5070000290870667 C-4.701000213623047,-0.5070000290870667 -1.4559999704360962,-0.5070000290870667 -1.4559999704360962,-0.5070000290870667 C-1.4559999704360962,-0.5070000290870667 -1.4559999704360962,3.7190001010894775 -1.4559999704360962,3.7190001010894775 C-1.4559999704360962,3.7190001010894775 -2.7279999256134033,3.7190001010894775 -2.7279999256134033,3.7190001010894775 C-2.7279999256134033,3.7190001010894775 -2.933000087738037,3.006999969482422 -2.933000087738037,3.006999969482422 C-3.3570001125335693,3.5820000171661377 -3.9860000610351562,3.869999885559082 -4.820000171661377,3.869999885559082z">
                                                                        </path>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <clipPath id="__lottie_element_8320">
                                                            <path d="M0,0 L600,0 L600,600 L0,600z"></path>
                                                        </clipPath>
                                                        <filter id="__lottie_element_8334"
                                                            filterUnits="objectBoundingBox" x="0%" y="0%" width="100%"
                                                            height="100%">
                                                            <feComponentTransfer in="SourceGraphic">
                                                                <feFuncA type="table" tableValues="1.0 0.0"></feFuncA>
                                                            </feComponentTransfer>
                                                        </filter>
                                                        <mask id="__lottie_element_8316_2" mask-type="alpha">
                                                            <g filter="url(#__lottie_element_8334)">
                                                                <rect width="600" height="600" x="0" y="0"
                                                                    fill="#ffffff" opacity="0"></rect>
                                                                <use></use>
                                                            </g>
                                                        </mask>
                                                    </defs>
                                                    <g clip-path="url(#__lottie_element_8310)">
                                                        <g clip-path="url(#__lottie_element_8312)"
                                                            transform="matrix(0.03999999910593033,0,0,0.03999999910593033,0,0)"
                                                            opacity="1">
                                                            <g mask="url(#__lottie_element_8316_2)"
                                                                >
                                                                <g transform="matrix(25,0,0,25,300,300)" opacity="1">
                                                                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                        <path fill="rgb(88,101,242)" fill-opacity="1"
                                                                            d=" M-7,-10 C-8.656999588012695,-10 -10,-8.656999588012695 -10,-7 C-10,-7 -10,7 -10,7 C-10,8.656999588012695 -8.656999588012695,10 -7,10 C-7,10 7,10 7,10 C8.656999588012695,10 10,8.656999588012695 10,7 C10,7 10,-7 10,-7 C10,-8.656999588012695 8.656999588012695,-10 7,-10 C7,-10 -7,-10 -7,-10z">
                                                                        </path>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className="expression-picker-chat-input-button buttonContainer_ff1010"><button
                                    aria-expanded="false" aria-haspopup="dialog" aria-controls="uid_5"
                                    aria-label="スタンプピッカーを開く" type="button"
                                    className="button__581d0 lookBlank_a5b4ca colorBrand__27d57 grow__4c8a4">
                                    <div className="contents__322f4 button__437ce button__493d9 stickerButton_c02bc0">
                                        <div className="buttonWrapper_bd4bd7">
                                            <div className="lottieIcon_c7076c"
                                                >
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24" height="24" preserveAspectRatio="xMidYMid meet"
                                                    >
                                                    <defs>
                                                        <clipPath id="__lottie_element_8336">
                                                            <rect width="24" height="24" x="0" y="0"></rect>
                                                        </clipPath>
                                                        <clipPath id="__lottie_element_8338">
                                                            <path d="M0,0 L600,0 L600,600 L0,600z"></path>
                                                        </clipPath>
                                                        <g id="__lottie_element_8343">
                                                            <g
                                                                transform="matrix(25,0,0,25,300,300)" opacity="1">
                                                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                    <path fill="rgb(88,101,242)" fill-opacity="1"
                                                                        d=" M-5.5,-2 C-4.671999931335449,-2 -4,-2.671999931335449 -4,-3.5 C-4,-4.328000068664551 -4.671999931335449,-5 -5.5,-5 C-6.328000068664551,-5 -7,-4.328000068664551 -7,-3.5 C-7,-2.671999931335449 -6.328000068664551,-2 -5.5,-2z M7,-3.5 C7,-2.671999931335449 6.328000068664551,-2 5.5,-2 C4.671999931335449,-2 4,-2.671999931335449 4,-3.5 C4,-4.328000068664551 4.671999931335449,-5 5.5,-5 C6.328000068664551,-5 7,-4.328000068664551 7,-3.5z M-2.9110000133514404,-0.5559999942779541 C-3.2179999351501465,-1.0149999856948853 -3.8399999141693115,-1.1380000114440918 -4.298999786376953,-0.8309999704360962 C-4.757999897003174,-0.5239999890327454 -4.880000114440918,0.09700000286102295 -4.572999954223633,0.5559999942779541 C-3.5880000591278076,2.0269999504089355 -1.9079999923706055,3 0,3 C1.9079999923706055,3 3.5880000591278076,2.0269999504089355 4.572999954223633,0.5559999942779541 C4.880000114440918,0.09700000286102295 4.756999969482422,-0.5239999890327454 4.297999858856201,-0.8309999704360962 C3.8389999866485596,-1.1380000114440918 3.2179999351501465,-1.0149999856948853 2.9110000133514404,-0.5559999942779541 C2.2809998989105225,0.38499999046325684 1.2120000123977661,1 0,1 C-1.2120000123977661,1 -2.2809998989105225,0.38499999046325684 -2.9110000133514404,-0.5559999942779541z">
                                                                    </path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g id="__lottie_element_8353">
                                                            <g clip-path="url(#__lottie_element_8354)"
                                                                transform="matrix(1,0,0,1,0,0)" opacity="1"
                                                                >
                                                                <g>
                                                                    <g>
                                                                        <path></path>
                                                                    </g>
                                                                </g>
                                                                <g >
                                                                    <g>
                                                                        <path></path>
                                                                    </g>
                                                                </g>
                                                                <g>
                                                                    <g>
                                                                        <path stroke-linecap="round"
                                                                            stroke-linejoin="miter" fill-opacity="0"
                                                                            stroke-miterlimit="4"></path>
                                                                    </g>
                                                                </g>
                                                                <g>
                                                                    <g>
                                                                        <path stroke-linecap="butt"
                                                                            stroke-linejoin="miter" fill-opacity="0"
                                                                            stroke-miterlimit="4"></path>
                                                                    </g>
                                                                </g>
                                                                <g clip-path="url(#__lottie_element_8360)"
                                                                    >
                                                                    <g>
                                                                        <path></path>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <clipPath id="__lottie_element_8354">
                                                            <path d="M0,0 L600,0 L600,600 L0,600z"></path>
                                                        </clipPath>
                                                        <clipPath id="__lottie_element_8360">
                                                            <path fill="#ffffff" clip-rule="nonzero"></path>
                                                            <path fill="#ffffff" clip-rule="nonzero"></path>
                                                        </clipPath>
                                                        <filter id="__lottie_element_8377"
                                                            filterUnits="objectBoundingBox" x="0%" y="0%" width="100%"
                                                            height="100%">
                                                            <feComponentTransfer in="SourceGraphic">
                                                                <feFuncA type="table" tableValues="1.0 0.0"></feFuncA>
                                                            </feComponentTransfer>
                                                        </filter>
                                                        <mask id="__lottie_element_8353_2" mask-type="alpha">
                                                            <g filter="url(#__lottie_element_8377)">
                                                                <rect width="600" height="600" x="0" y="0"
                                                                    fill="#ffffff" opacity="0"></rect>
                                                                <use></use>
                                                            </g>
                                                        </mask>
                                                        <filter id="__lottie_element_8378"
                                                            filterUnits="objectBoundingBox" x="0%" y="0%" width="100%"
                                                            height="100%">
                                                            <feComponentTransfer in="SourceGraphic">
                                                                <feFuncA type="table" tableValues="1.0 0.0"></feFuncA>
                                                            </feComponentTransfer>
                                                        </filter>
                                                        <mask id="__lottie_element_8343_2" mask-type="alpha">
                                                            <g filter="url(#__lottie_element_8378)">
                                                                <rect width="600" height="600" x="0" y="0"
                                                                    fill="#ffffff" opacity="0"></rect>
                                                                <use></use>
                                                            </g>
                                                        </mask>
                                                    </defs>
                                                    <g clip-path="url(#__lottie_element_8336)">
                                                        <g clip-path="url(#__lottie_element_8338)"
                                                            transform="matrix(0.03999999910593033,0,0,0.03999999910593033,0,0)"
                                                            opacity="1">
                                                            <g mask="url(#__lottie_element_8353_2)"
                                                                >
                                                                <g>
                                                                    <g>
                                                                        <path></path>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g transform="matrix(25,0,0,25,300,300)" opacity="1"
                                                                >
                                                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                    <path fill="rgb(88,101,242)" fill-opacity="1"
                                                                        d=" M-6,-10 C-6,-10 6,-10 6,-10 C8.208999633789062,-10 10,-8.208999633789062 10,-6 C10,-6 10,1.5 10,1.5 C10,1.7760000228881836 9.776000022888184,2 9.5,2 C9.5,2 7,2 7,2 C4.238999843597412,2 2,4.238999843597412 2,7 C2,7 2,9.5 2,9.5 C2,9.776000022888184 1.7760000228881836,10 1.5,10 C1.5,10 -6,10 -6,10 C-8.208999633789062,10 -10,8.208999633789062 -10,6 C-10,6 -10,-6 -10,-6 C-10,-8.208999633789062 -8.208999633789062,-10 -6,-10z M9.659000396728516,4 C9.692000389099121,4 9.71399974822998,4.033999919891357 9.699999809265137,4.064000129699707 C9.555000305175781,4.36299991607666 9.359999656677246,4.639999866485596 9.121000289916992,4.879000186920166 C9.121000289916992,4.879000186920166 4.879000186920166,9.121000289916992 4.879000186920166,9.121000289916992 C4.639999866485596,9.359999656677246 4.36299991607666,9.555000305175781 4.064000129699707,9.699999809265137 C4.033999919891357,9.71399974822998 4,9.692000389099121 4,9.659000396728516 C4,9.659000396728516 4,9.17199993133545 4,9.17199993133545 C4,9.17199993133545 4,7 4,7 C4,5.3429999351501465 5.3429999351501465,4 7,4 C7,4 9.17199993133545,4 9.17199993133545,4 C9.17199993133545,4 9.659000396728516,4 9.659000396728516,4z M-5.5,-2 C-4.671999931335449,-2 -4,-2.671999931335449 -4,-3.5 C-4,-4.328000068664551 -4.671999931335449,-5 -5.5,-5 C-6.328000068664551,-5 -7,-4.328000068664551 -7,-3.5 C-7,-2.671999931335449 -6.328000068664551,-2 -5.5,-2z M7,-3.5 C7,-4.328000068664551 6.328000068664551,-5 5.5,-5 C4.671999931335449,-5 4,-4.328000068664551 4,-3.5 C4,-2.671999931335449 4.671999931335449,-2 5.5,-2 C6.328000068664551,-2 7,-2.671999931335449 7,-3.5z M-2.9110000133514404,-0.5559999942779541 C-3.2179999351501465,-1.0149999856948853 -3.8399999141693115,-1.1380000114440918 -4.298999786376953,-0.8309999704360962 C-4.757999897003174,-0.5239999890327454 -4.880000114440918,0.09700000286102295 -4.572999954223633,0.5559999942779541 C-3.5880000591278076,2.0269999504089355 -1.9079999923706055,3 0,3 C1.9079999923706055,3 3.5880000591278076,2.0269999504089355 4.572999954223633,0.5559999942779541 C4.880000114440918,0.09700000286102295 4.756999969482422,-0.5239999890327454 4.297999858856201,-0.8309999704360962 C3.8389999866485596,-1.1380000114440918 3.2179999351501465,-1.0149999856948853 2.9110000133514404,-0.5559999942779541 C2.2809998989105225,0.38499999046325684 1.2120000123977661,1 0,1 C-1.2120000123977661,1 -2.2809998989105225,0.38499999046325684 -2.9110000133514404,-0.5559999942779541z">
                                                                    </path>
                                                                </g>
                                                            </g>
                                                            <g mask="url(#__lottie_element_8343_2)"
                                                                >
                                                                <g transform="matrix(25,0,0,25,300,300)" opacity="1">
                                                                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                        <path fill="rgb(88,101,242)" fill-opacity="1"
                                                                            d=" M-6,-10 C-6,-10 6,-10 6,-10 C8.208999633789062,-10 10,-8.208999633789062 10,-6 C10,-6 10,1.5 10,1.5 C10,1.7760000228881836 9.776000022888184,2 9.5,2 C9.5,2 7,2 7,2 C4.238999843597412,2 2,4.238999843597412 2,7 C2,7 2,9.5 2,9.5 C2,9.776000022888184 1.7760000228881836,10 1.5,10 C1.5,10 -6,10 -6,10 C-8.208999633789062,10 -10,8.208999633789062 -10,6 C-10,6 -10,-6 -10,-6 C-10,-8.208999633789062 -8.208999633789062,-10 -6,-10z M9.659000396728516,4 C9.692000389099121,4 9.71399974822998,4.033999919891357 9.699999809265137,4.064000129699707 C9.555000305175781,4.36299991607666 9.359999656677246,4.639999866485596 9.121000289916992,4.879000186920166 C9.121000289916992,4.879000186920166 4.879000186920166,9.121000289916992 4.879000186920166,9.121000289916992 C4.639999866485596,9.359999656677246 4.36299991607666,9.555000305175781 4.064000129699707,9.699999809265137 C4.033999919891357,9.71399974822998 4,9.692000389099121 4,9.659000396728516 C4,9.659000396728516 4,9.17199993133545 4,9.17199993133545 C4,9.17199993133545 4,7 4,7 C4,5.3429999351501465 5.3429999351501465,4 7,4 C7,4 9.17199993133545,4 9.17199993133545,4 C9.17199993133545,4 9.659000396728516,4 9.659000396728516,4z">
                                                                        </path>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg></div>
                                        </div>
                                    </div>
                                </button></div>
                            <div className="expression-picker-chat-input-button buttonContainer_ff1010"><button
                                    aria-controls="uid_5" aria-expanded="false" aria-haspopup="dialog"
                                    aria-label="絵文字を選択" type="button"
                                    className="emojiButtonNormal__5f64f emojiButton__176c8 emojiButton_b63c38 button__493d9 button__581d0 lookBlank_a5b4ca colorBrand__27d57 grow__4c8a4">
                                    <div className="contents__322f4">
                                        <div className="spriteContainer__732c7"
                                          >
                                            <div className="sprite__294b3 spriteColored__9a869 inactive__27e36"></div>
                                            <div className="sprite__294b3 spriteGreyscale__750f4 active__6a892"></div>
                                        </div>
                                    </div>
                                </button></div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
      </main>
    </div>
  );
}
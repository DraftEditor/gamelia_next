'use client';
import { usePathname } from "next/navigation";
import "./functionbar.css"

export default function FunctionBar() {
    const path = usePathname();
    return (
        <div className="function_bar_wrapper">
            <div className="subtitleContainer_f50402">
                <section className="title_d4ba1a container__26baa themed_b152d4" aria-label="チャンネルのヘッダー">
                    <div className="upperContainer__57565">
                        <div className="children_cde9af">
                            <div className="iconWrapper_de6cd1">
                                <svg x="0" y="0" className="icon_ae0b42" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path fill="currentColor" fill-rule="evenodd" d="M16 4h.5v-.5a2.5 2.5 0 0 1 5 0V4h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm4-.5V4h-2v-.5a1 1 0 1 1 2 0Z" clip-rule="evenodd" className="">
                                    </path>
                                    <path fill="currentColor" d="M12.5 8c.28 0 .5.22.5.5V9c0 .1 0 .2.02.31.03.34-.21.69-.56.69H9.85l-.67 4h4.97l.28-1.68c.06-.34.44-.52.77-.43a3 3 0 0 0 .8.11c.27 0 .47.24.43.5l-.25 1.5H20a1 1 0 1 1 0 2h-4.15l-.86 5.16a1 1 0 0 1-1.98-.32l.8-4.84H8.86l-.86 5.16A1 1 0 0 1 6 20.84L6.82 16H3a1 1 0 1 1 0-2h4.15l.67-4H4a1 1 0 1 1 0-2h4.15l.86-5.16a1 1 0 1 1 1.98.32L10.19 8h2.31Z" className="">
                                    </path>
                                </svg>
                            </div>
                            <span className="hiddenVisually__389a6">テキストチャンネル
                            </span>
                            <div className="titleWrapper_d6133e">
                                <h1 className="defaultColor__30336 heading-md-semibold__76ba1 defaultColor__8610e title__84e16" data-text-variant="heading-md/semibold">
                                    <span className="hiddenVisually__389a6">United States of Gamelia:
                                    </span> 《🍷》メインチャット
                                </h1>
                            </div>
                            <div className="divider_bdb894">
                            </div>
                            <div className="topic__16ae3 expandable__8804d">
                                <div className="topicClickTarget_f06d56" aria-label="チャンネルトピックを開く" role="button">
                                </div>
                                <span>ハードコア
                                </span>
                                <span className="emojiContainer__8da7f emojiContainerClickable__44f83" aria-expanded="false" role="button">

                                </span>
                            </div>
                        </div>
                        <div className="toolbar__62fb5">
                            <div className="icon__3ede9 iconWrapper_de6cd1 clickable_ce0925" role="button" aria-label="スレッド" aria-expanded="false">
                                <svg x="0" y="0" className="icon_ae0b42" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path d="M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36ZM15.66 16.8a1 1 0 0 1-1.38.28l-8.49-5.66A1 1 0 1 1 6.9 9.76l8.49 5.65a1 1 0 0 1 .27 1.39ZM17.1 14.25a1 1 0 1 0 1.11-1.66L9.73 6.93a1 1 0 0 0-1.11 1.66l8.49 5.66Z" fill="currentColor" className="">
                                    </path>
                                </svg>
                            </div>
                            <div className="iconWrapper_de6cd1 clickable_ce0925" role="button" aria-label="通知設定" aria-expanded="false">
                                <svg x="0" y="0" className="icon_ae0b42" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.13 16.13c.11.27.46.28.66.08L15.73 4.27a.47.47 0 0 0-.07-.74 6.97 6.97 0 0 0-1.35-.64.62.62 0 0 1-.38-.43 2 2 0 0 0-3.86 0 .62.62 0 0 1-.38.43A7 7 0 0 0 5 9.5v2.09a.5.5 0 0 1-.13.33l-1.1 1.22A3 3 0 0 0 3 15.15v.28c0 .24.04.48.13.7ZM18.64 9.36c.13-.13.36-.05.36.14v2.09c0 .12.05.24.13.33l1.1 1.22a3 3 0 0 1 .77 2.01v.28c0 .67-.34 1.29-.95 1.56-1.31.6-4 1.51-8.05 1.51-.46 0-.9-.01-1.33-.03a.48.48 0 0 1-.3-.83l8.27-8.28ZM9.18 19.84A.16.16 0 0 0 9 20a3 3 0 1 0 6 0c0-.1-.09-.17-.18-.16a24.84 24.84 0 0 1-5.64 0Z" className="">
                                    </path>
                                </svg>
                            </div>
                            <div className="iconWrapper_de6cd1 clickable_ce0925" role="button" aria-label="ピン留めされたメッセージ" aria-expanded="false">
                                <svg x="0" y="0" className="icon_ae0b42" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M19.38 11.38a3 3 0 0 0 4.24 0l.03-.03a.5.5 0 0 0 0-.7L13.35.35a.5.5 0 0 0-.7 0l-.03.03a3 3 0 0 0 0 4.24L13 5l-2.92 2.92-3.65-.34a2 2 0 0 0-1.6.58l-.62.63a1 1 0 0 0 0 1.42l9.58 9.58a1 1 0 0 0 1.42 0l.63-.63a2 2 0 0 0 .58-1.6l-.34-3.64L19 11l.38.38ZM9.07 17.07a.5.5 0 0 1-.08.77l-5.15 3.43a.5.5 0 0 1-.63-.06l-.42-.42a.5.5 0 0 1-.06-.63L6.16 15a.5.5 0 0 1 .77-.08l2.14 2.14Z" className="">
                                    </path>
                                </svg>
                            </div>
                            <div className="iconWrapper_de6cd1 clickable_ce0925 selected__1fc53" role="button" aria-label="メンバーリストを非表示">
                                <svg x="0" y="0" className="icon_ae0b42" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z" className="">
                                    </path>
                                </svg>
                            </div>
                            <div className="search__07df0">
                                <div className="search_ac353c">
                                    <div className="searchBar__5a20a">
                                        <div className="DraftEditor-root">
                                            <div className="public-DraftEditorPlaceholder-root">
                                                <div className="public-DraftEditorPlaceholder-inner" id="placeholder-atif7">検索
                                                </div>
                                            </div>
                                            <div className="DraftEditor-editorContainer">
                                                <div aria-describedby="placeholder-atif7" aria-expanded="false" aria-label="検索" className="notranslate public-DraftEditor-content" role="combobox">
                                                    <div data-contents="true">
                                                        <div className="" data-block="true" data-editor="atif7" data-offset-key="27r41-0-0">
                                                            <div data-offset-key="27r41-0-0" className="public-DraftStyleDefault-block public-DraftStyleDefault-ltr">
                                                                <span data-offset-key="27r41-0-0">

                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="icon__53a5c iconLayout__9d9a4 small_e6f811" aria-hidden="true" aria-label="検索履歴の消去" role="button">
                                            <div className="iconContainer__9f124">
                                                <svg className="icon__5c8c7 visible__720ac" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path fill="currentColor" fill-rule="evenodd" d="M15.62 17.03a9 9 0 1 1 1.41-1.41l4.68 4.67a1 1 0 0 1-1.42 1.42l-4.67-4.68ZM17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" clip-rule="evenodd" className="">
                                                    </path>
                                                </svg>
                                                <svg aria-hidden="true" role="img" className="icon__5c8c7" width="24" height="24" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="recentsIcon_a585d7">
                                <div className="iconWrapper_de6cd1 clickable_ce0925" role="button" aria-label="受信ボックス" aria-expanded="false">
                                    <svg x="0" y="0" className="icon_ae0b42" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" fill-rule="evenodd" d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-2.65c-.5 0-.85.5-.85 1a3 3 0 1 1-6 0c0-.5-.35-1-.85-1H5.5A1.5 1.5 0 0 1 4 11.5v-6Z" clip-rule="evenodd" className="">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
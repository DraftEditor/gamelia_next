'use client';
import Link from "next/link";
import Image from 'next/image';
import "./sidebar.css";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
interface HeightProp {
  Height: number
}

export default function Sidebar({ Height }: HeightProp) {
  const path = usePathname();
  const items = [
    {
      type: "TextChannel",
      name: "フォーラム",
      icon: "icon/path",
      id: "Folum",
      body: []
    },
    {
      type: "TextChannel",
      name: "《📢》おしらせ",
      icon: "icon/path",
      id: "Notice",
      body: []
    },
    {
      type: "TextChannel",
      name: "《⌛》サーバーの歴史",
      icon: "icon/path",
      id: "ServerHistory",
      body: []
    },
    {
      type: "TextChannel",
      name: "《🕌》議会",
      icon: "icon/path",
      id: "Parliament",
      body: []
    },
    {
      type: "Category",
      name: "🛩INTERNATIONAL AIRPORT",
      icon: "icon/path",
      id: "International_Airport",
      body:
        [
          {
            type: "TextChannel",
            name: "《📖》ルール",
            icon: "icon/path",
            id: "Rule",
            body: []
          },
          {
            type: "TextChannel",
            name: "《🛬》入国",
            icon: "icon/path",
            id: "Import",
            body: []
          },
          {
            type: "TextChannel",
            name: "《🛫》出国",
            icon: "icon/path",
            id: "Export",
            body: []
          },
          {
            type: "TextChannel",
            name: "《📁》ロール",
            icon: "icon/path",
            id: "Role",
            body: []
          },
          {
            type: "TextChannel",
            name: "上野動物園",
            icon: "icon/path",
            id: "UenoZoo",
            body: []
          }
        ]
    },
    {
      type: "Category",
      name: "🌃STATE OF HI-YORK",
      icon: "icon/path",
      id: "State_Of_HI-YORK",
      body:
        [
          {
            type: "TextChannel",
            id: "MainChat",
            name: "《🍷》メインチャット",
            icon: "icon/path"
          },
          {
            type: "TextChannel",
            id: "SubChat",
            name: "《🧩》サブチャット",
            icon: "icon/path"
          },
          {
            type: "TextChannel",
            id: "News",
            name: "《📜》ニュース",
            icon: "icon/path"
          },
          {
            type: "TextChannel",
            id: "NSB",
            name: "《🤖》notsobot",
            icon: "icon/path"
          },
          {
            type: "TextChannel",
            id: "Game",
            name: "《♟》ゲーム",
            icon: "icon/path"
          },
          {
            type: "TextChannel",
            id: "Gamecraft",
            name: "ガメクラチャット",
            icon: "icon/path"
          }
        ]
    },
    {
      type: "Category",
      name: "🌉STATE OF OHAJIO",
      icon: "icon/path",
      id: "State_Of_OHAJIO",
      body:
        [
          {
            type: "TextChannel",
            id: "Recommend_Video",
            name: "《📱》オヌヌメ動画",
          },
          {
            type: "TextChannel",
            id: "Gallery",
            name: "《🏛》連邦美術館",
            icon: "icon/path"
          },
          {
            type: "TextChannel",
            id: "Cafe",
            name: "《☕》カフェ",
            icon: "icon/path"
          },
          {
            type: "TextChannel",
            id: "NSFW",
            name: "《🔞》nsfw",
            icon: "icon/path"
          }
        ]
    },
    {
      type: "Category",
      name: "🎙NATIONAL RADIO",
      icon: "icon/path",
      id: "NationalRadio",
      body:
        [
          {
            type: "TextChannel",
            id: "MusicLounge",
            name: "┏📻｜music-lounge",
          },
          {
            type: "TextChannel",
            id: "ListenOnly1",
            name: "┣🔇｜聞き専-vc1",
            icon: "icon/path"
          },
          {
            type: "TextChannel",
            id: "ListenOnly2",
            name: "┣🔇｜聞き専-vc2",
            icon: "icon/path"
          },
          {
            type: "VoiceChannel",
            id: "VCMusic",
            name: "┣🎺｜VC-MUSIC",
            icon: "icon/path"
          },
          {
            type: "VoiceChannel",
            id: "VC1",
            name: "┣🎙 ｜VC-1(64kbps)",
            icon: "icon/path"
          },
          {
            type: "VoiceChannel",
            id: "VC2",
            name: "┣🎙 ｜VC-2(256kbps)",
            icon: "icon/path"
          },
          {
            type: "StageChannel",
            id: "Stage",
            name: "┗🎪｜STAGE",
            icon: "icon/path"
          }
        ]
    }
  ];
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
    height: viewportHeight - Height - 49 - 53
  };
  return (
    <div className="sidebar">
      <div>
        <div className="top-row ps-3 navbar navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand">Gamelia_Next</a>
            <button title="Navigation menu" className="navbar-toggler">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
        <ul style={heightStyle} className="channel-list">
          <div style={{ height: 12 }}></div>
          {items.map((item) => {
            if (item.type === "TextChannel") {
              const isActive = "/app/channels/" + item.id === path
              return (
                <li key={item.id}>
                  <div className="channel-item">
                    <Link href={"/app/channels/" + item.id} className={isActive ? 'nav-link active' : 'nav-link'}>
                      {/* Display the icon */}
                      <div
                        aria-label="テキスト icon"
                        role="img"
                        className="iconContainer__6a580"
                      >
                        <svg
                          className="icon__67ab4"
                          aria-hidden="true"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M10.99 3.16A1 1 0 1 0 9 2.84L8.15 8H4a1 1 0 0 0 0 2h3.82l-.67 4H3a1 1 0 1 0 0 2h3.82l-.8 4.84a1 1 0 0 0 1.97.32L8.85 16h4.97l-.8 4.84a1 1 0 0 0 1.97.32l.86-5.16H20a1 1 0 1 0 0-2h-3.82l.67-4H21a1 1 0 1 0 0-2h-3.82l.8-4.84a1 1 0 1 0-1.97-.32L15.15 8h-4.97l.8-4.84ZM14.15 14l.67-4H9.85l-.67 4h4.97Z"
                            clip-rule="evenodd"
                            className=""
                          ></path>
                        </svg>
                      </div>
                      <span className="oi oi-channel">{item.name}</span>
                    </Link>
                  </div>
                </li>
              );
            } else if (item.type === "Category") {
              return (
                <li key={item.id} className="category-wrapper">
                  <div className="category_hover iconVisibility__605ab wrapper__07e2f wrapperCommon__2578a clickable__797c7">
                    <div className="mainContent__2333c" data-list-item-id="channels___1233117178820169789" aria-label="ボイスチャンネル (カテゴリー)" aria-expanded="true" role="button">
                      <svg className="category_hover_target icon__3aa8e" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M5.3 9.3a1 1 0 0 1 1.4 0l5.3 5.29 5.3-5.3a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1 0-1.42Z" className=""></path>
                      </svg>
                      <h3 className="name__27f04 container__43554">
                        <div className="category_hover_target overflow__993fa">{item.name}</div>
                      </h3>
                    </div>
                  </div>
                  {item.body.map((item2) => {
                    if (item2.type === "TextChannel") {
                      const isActive2 = "/app/channels/" + item2.id === path
                      console.log(path);
                      return (
                        <div key={item2.id}>
                          <div className="channel-item">
                            <Link href={"/app/channels/" + item2.id} className={isActive2 ? 'nav-link active' : 'nav-link'}>
                              {/* Display the icon */}
                              <div
                                aria-label="テキスト icon"
                                role="img"
                                className="iconContainer__6a580"
                              >
                                <svg
                                  className="icon__67ab4"
                                  aria-hidden="true"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="currentColor"
                                    fill-rule="evenodd"
                                    d="M10.99 3.16A1 1 0 1 0 9 2.84L8.15 8H4a1 1 0 0 0 0 2h3.82l-.67 4H3a1 1 0 1 0 0 2h3.82l-.8 4.84a1 1 0 0 0 1.97.32L8.85 16h4.97l-.8 4.84a1 1 0 0 0 1.97.32l.86-5.16H20a1 1 0 1 0 0-2h-3.82l.67-4H21a1 1 0 1 0 0-2h-3.82l.8-4.84a1 1 0 1 0-1.97-.32L15.15 8h-4.97l.8-4.84ZM14.15 14l.67-4H9.85l-.67 4h4.97Z"
                                    clip-rule="evenodd"
                                    className=""
                                  ></path>
                                </svg>
                              </div>
                              <span className="oi oi-channel">{item2.name}</span>
                            </Link>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
      <div className="container_debb33">
        <div className="avatarWrapper__500a6 withTagAsButton_e22174" aria-expanded="false" aria-label="ステータスを設定" role="button">
          <div className="wrapper__3ed10 avatar_f8541f" role="img" aria-label="draft_editor、 オンライン" aria-hidden="false" style={{width: 32, height: 32}}>
            <svg width="40" height="40" viewBox="0 0 40 40" className="mask_d5067d svg_a6bf1c" aria-hidden="true">
            <mask id=":ro:" width="32" height="32">
              <circle cx="16" cy="16" r="16" fill="white">
              </circle>
              <rect color="black" x="19" y="19" width="16" height="16" rx="8" ry="8">
              </rect>
            </mask>
            <foreignObject x="0" y="0" width="32" height="32" mask="url(#:ro:)">
              <div className="avatarStack__789b4">
              <Image
                  src="https://cdn.discordapp.com/avatars/970990149720735774/b48e77db5763ffbc2f54a2af2d055e95.webp?size=40"
                  height={32}
                  width={32}
                  alt="アバターイメージ"
                  aria-hidden="false"
                />
              </div>
            </foreignObject>
            <svg x="14.5" y="17" width="25" height="15" viewBox="0 0 25 15">
              <mask id=":rp:">
                <rect x="7.5" y="5" width="10" height="10" rx="5" ry="5" fill="white">
                </rect>
                <rect x="12.5" y="10" width="0" height="0" rx="0" ry="0" fill="black">
                </rect>
              </mask>
              <rect fill="#23a55a" width="25" height="15" mask="url(#:rp:)">
              </rect>
              </svg>
            </svg>
          </div>
          <div className="nameTag__77ab2 canCopy__8ec33">
            <div className="panelTitleContainer__8e644">
              <div className="text-sm-normal__95a78 title__4a7a9" data-text-variant="text-sm/normal">Draft_Editor
              </div>
            </div>
            <div className="panelSubtextContainer_fd5930">
              <div className="text-xs-normal__46d75 subtext_ce73b4" data-text-variant="text-xs/normal">
                <div className="hoverRoll__3ea9e">
                  <div className="hovered__5a165">draft_editor
                  </div>
                  <div className="default__74311">オンライン
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
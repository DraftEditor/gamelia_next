'use client';
import { usePathname } from "next/navigation";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import "./users.css"

interface HeightProp {
  Height: number
}

const items = [
{
  name: "Tier X",
  icon: "icon/path",
  id: "Tier X",
  body:
    [
      {
        name: "下痢下呂ゲゲゲ",
        color: "rgb(179, 255, 245)",
        icon: "https://cdn.discordapp.com/avatars/639848498400985109/00134b9fbb71d0497207cf19eea25d12.webp?size=40",
        description: "Mr.ネット産廃",
        id: "AOKI",
        body: []
      }
    ]
  },
  {
    name: "Tier IX",
    icon: "icon/path",
    id: "Tier IX",
    body:
      [
        {
          name: "お〜怖っ さすが腰ヘコ使様は言うことが違う",
          color: "rgb(96, 245, 235)",
          icon: "https://cdn.discordapp.com/avatars/639848498400985109/00134b9fbb71d0497207cf19eea25d12.webp?size=40",
          description: "Spotify",
          id: "TMT",
          body: []
        },
        {
          name: "CTKP",
          color: "#FFFFFF",
          icon: "https://cdn.discordapp.com/avatars/639848498400985109/00134b9fbb71d0497207cf19eea25d12.webp?size=40",
          description: "Youtube",
          id: "CTKP",
          body: []
        },
        {
          name: "CTKP",
          color: "#FFFFFF",
          icon: "https://cdn.discordapp.com/avatars/639848498400985109/00134b9fbb71d0497207cf19eea25d12.webp?size=40",
          description: "Youtube",
          id: "CTKP",
          body: []
        },
        {
          name: "CTKP",
          color: "#FFFFFF",
          icon: "https://cdn.discordapp.com/avatars/639848498400985109/00134b9fbb71d0497207cf19eea25d12.webp?size=40",
          description: "Youtube",
          id: "CTKP",
          body: []
        },
        {
          name: "CTKP",
          color: "#FFFFFF",
          icon: "https://cdn.discordapp.com/avatars/639848498400985109/00134b9fbb71d0497207cf19eea25d12.webp?size=40",
          description: "Youtube",
          id: "CTKP",
          body: []
        },
        {
          name: "CTKP",
          color: "#FFFFFF",
          icon: "https://cdn.discordapp.com/avatars/639848498400985109/00134b9fbb71d0497207cf19eea25d12.webp?size=40",
          description: "Youtube",
          id: "CTKP",
          body: []
        },
        {
          name: "CTKP",
          color: "#FFFFFF",
          icon: "https://cdn.discordapp.com/avatars/639848498400985109/00134b9fbb71d0497207cf19eea25d12.webp?size=40",
          description: "Youtube",
          id: "CTKP",
          body: []
        },
        {
          name: "CTKP",
          color: "#FFFFFF",
          icon: "https://cdn.discordapp.com/avatars/639848498400985109/00134b9fbb71d0497207cf19eea25d12.webp?size=40",
          description: "Youtube",
          id: "CTKP",
          body: []
        },
        {
          name: "CTKP",
          color: "#FFFFFF",
          icon: "https://cdn.discordapp.com/avatars/639848498400985109/00134b9fbb71d0497207cf19eea25d12.webp?size=40",
          description: "Youtube",
          id: "CTKP",
          body: []
        },
        {
          name: "CTKP",
          color: "#FFFFFF",
          icon: "https://cdn.discordapp.com/avatars/639848498400985109/00134b9fbb71d0497207cf19eea25d12.webp?size=40",
          description: "Youtube",
          id: "CTKP",
          body: []
        },
        {
          name: "CTKP",
          color: "#FFFFFF",
          icon: "https://cdn.discordapp.com/avatars/639848498400985109/00134b9fbb71d0497207cf19eea25d12.webp?size=40",
          description: "Youtube",
          id: "CTKP",
          body: []
        },
        {
          name: "CTKP",
          color: "#FFFFFF",
          icon: "https://cdn.discordapp.com/avatars/639848498400985109/00134b9fbb71d0497207cf19eea25d12.webp?size=40",
          description: "Youtube",
          id: "CTKP",
          body: []
        },
        {
          name: "CTKP",
          color: "#FFFFFF",
          icon: "https://cdn.discordapp.com/avatars/639848498400985109/00134b9fbb71d0497207cf19eea25d12.webp?size=40",
          description: "Youtube",
          id: "CTKP",
          body: []
        },
        {
          name: "CTKP",
          color: "#FFFFFF",
          icon: "https://cdn.discordapp.com/avatars/639848498400985109/00134b9fbb71d0497207cf19eea25d12.webp?size=40",
          description: "Youtube",
          id: "CTKP",
          body: []
        }
      ]
    }
];

export default function Users( { Height }: HeightProp ){
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
  return(
    <div style={heightStyle} className="users">
      <div>
        <ul style={heightStyle} className="user-list">
          <div style={{ height: 12 }}></div>
          {items.map((item) => {
            return (
              <div key={item.id}>
                <h3 className="membersGroup_cad095 container__43554">
                  <span className="hiddenVisually__389a6">{item.name}, {item.body.length} 人のメンバー
                  </span>
                  <span aria-hidden="true">{item.name} — {item.body.length}
                  </span>
                </h3>
                {item.body.map((item2) => {
                  return (
                    <div key={item2.id} className="member_aa4760 member_b44d5d container_a48b21 clickable__03a29" role="listitem" data-list-item-id="members-1216743969912786965___0">
                      <div className="memberInner__4dac6 layout_bb8e67">
                        <div className="avatar__6337f">
                          <div className="wrapper__3ed10" role="img" aria-label="draft_editor、 オンライン" aria-hidden="false" style={{width: 32, height: 32}}>
                            <svg className="40" height="40" viewBox="0 0 40 40"  aria-hidden="true">
                            <mask id="svg-mask-avatar-status-round-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                              <circle fill="white" cx="0.5" cy="0.5" r="0.5">
                              </circle>
                              <circle fill="black" cx="0.84375" cy="0.84375" r="0.25">
                              </circle>
                            </mask>
                            <mask id="svg-mask-status-online" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                              <circle fill="white" cx="0.5" cy="0.5" r="0.5">
                              </circle>
                            </mask>
                            <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-status-round-32)">
                              <div className="avatarStack__789b4">
                              <Image
                                src={item2.icon}
                                height={32}
                                width={32}
                                alt="アバターイメージ"
                                aria-hidden="false"
                              />
                              </div>
                            </foreignObject>
                            <rect width="10" height="10" x="22" y="22" fill="#23a55a" mask="url(#svg-mask-status-online)" className="pointerEvents__585e6">
                            </rect>
                            </svg>
                          </div>
                        </div>
                        <div className="content_e8a0d1">
                          <div className="nameAndDecorators__389dd">
                            <div className="name__7afe8">
                              <span className="username_ab1e31">
                                <span style={{color: item2.color}}  className="name_c3d448 username__4a6f7 desaturateUserColors_eb6bd2">{item2.name}
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="subText__4629e">
                            <div className="activity_bafb94">
                              <div className="activityText__31c22">{item2.description}</div>
                                <div className="textRuler__66fea activityText__31c22" aria-hidden="true">Mr.ネット産廃
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  );
                  return null;
                })}
              </div>
            );
            return null;
          })}
        </ul>
      </div>
    </div>
  );
}
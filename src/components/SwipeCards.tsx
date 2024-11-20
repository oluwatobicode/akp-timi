import { Dispatch, SetStateAction, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const SwipeCards = () => {
  const [cards, setCards] = useState<Card[]>(cardData);

  return (
    <div className="grid h-[500px] w-full place-items-center ">
      <h1 className="text-white">Swipe the cards!</h1>
      {cards.map((card) => {
        return (
          <>
            <Card key={card.id} cards={cards} setCards={setCards} {...card} />
          </>
        );
      })}
    </div>
  );
};

const Card = ({
  id,
  url,
  setCards,
  cards,
}: {
  id: number;
  url: string;
  setCards: Dispatch<SetStateAction<Card[]>>;
  cards: Card[];
}) => {
  const x = useMotionValue(0);

  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;

    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 50) {
      setCards((pv) => pv.filter((v) => v.id !== id));
    }
  };

  return (
    <>
      <motion.img
        src={url}
        alt="Placeholder alt"
        className="h-96 w-72 origin-bottom rounded-lg bg-white object-cover hover:cursor-grab active:cursor-grabbing"
        style={{
          gridRow: 1,
          gridColumn: 1,
          x,
          opacity,
          rotate,
          transition: "0.125s transform",
          boxShadow: isFront
            ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
            : undefined,
        }}
        animate={{
          scale: isFront ? 1 : 0.98,
        }}
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        onDragEnd={handleDragEnd}
      />
    </>
  );
};

export default SwipeCards;

type Card = {
  id: number;
  url: string;
};

const cardData: Card[] = [
  {
    id: 1,
    url: "https://res.cloudinary.com/drcy6fgto/image/upload/v1732056023/IMG_6951_xsnqae.jpg",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/drcy6fgto/image/upload/v1731598818/IMG_2481_xysz7i.jpg",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/drcy6fgto/image/upload/v1731598835/IMG_2482_ryuxeh.jpg",
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/drcy6fgto/image/upload/v1731599500/IMG_6828_yobatp.jpg",
  },
  {
    id: 5,
    url: "https://res.cloudinary.com/drcy6fgto/image/upload/v1731599473/IMG_6196_wwvif5.jpg",
  },
  {
    id: 6,
    url: "https://res.cloudinary.com/drcy6fgto/image/upload/v1731599091/IMG_0615_bwgs6m.jpg",
  },
  {
    id: 7,
    url: "https://res.cloudinary.com/drcy6fgto/image/upload/v1731599651/IMG_2506_p86x7t.jpg",
  },
  {
    id: 8,
    url: "https://res.cloudinary.com/drcy6fgto/image/upload/v1731599734/IMG_2505_og10dp.jpg",
  },
  {
    id: 9,
    url: "https://res.cloudinary.com/drcy6fgto/image/upload/v1731599016/IMG_0615_aiorwk.jpg",
  },
  {
    id: 10,
    url: " https://res.cloudinary.com/drcy6fgto/image/upload/v1732055791/IMG_0298_Original_btgvik.jpg",
  },
  {
    id: 11,
    url: " https://res.cloudinary.com/drcy6fgto/image/upload/v1731599492/IMG_5411_g1r3y3.jpg",
  },
  {
    id: 12,
    url: "https://res.cloudinary.com/drcy6fgto/image/upload/v1732056100/IMG_7462_bxvah8.jpg",
  },
  {
    id: 13,
    url: "https://res.cloudinary.com/drcy6fgto/image/upload/v1732056083/IMG_6484_zstbwq.jpg",
  },
  {
    id: 14,
    url: "https://res.cloudinary.com/drcy6fgto/image/upload/v1731599761/IMG_1922_zzhkvn.jpg",
  },
];

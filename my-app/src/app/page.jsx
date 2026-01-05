export default function App() {
  return (
    <div>
      <HowAreYou emotion={0} />
      <Avatar username={" Jonny"} />
      <ThemeBackground theme={"light"} />
    </div>
  );
}

const HowAreYou = ({ emotion }) => {
  return emotion > 0 ? (
    <p className="text-emerald-600 mt-30 ml-30">
      LITTLE SblackED, I will fine though!😬
    </p>
  ) : (
    <p className="text-orange-600 mt-30 ml-30">
      Clap your hand bro, cause I'm happy😃{" "}
    </p>
  );
};

//  `theme` prop (e.g., "dark" or "light"). Use a template string to set a `className` like: `className={`container-${theme}`}`.
const Avatar = ({ username }) => {
  const imageUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`;
  return <img src={imageUrl} alt={`${username}'s avatar`} />;
};

const ThemeBackground = ({ theme }) => {
  return (
    <p className={`${theme === "black" ? "bg-red-500" : "bg-emerald-500"}`}>
      test
    </p>
  );
};

import FilterUser from "./components/filter";
import UserApp from "./components/map";
import Orders from "./components/reduce";

export default function App() {
  return (
    <div>
      <HowAreYou emotion={0} />
      <Avatar username={" Jonny"} />
      <ThemeBackground theme={"light"} />
      <UserApp />
      <FilterUser />
      <Orders />
    </div>
  );
}

const HowAreYou = ({ emotion }) => {
  return emotion > 0 ? (
    <p className="text-emerald-600 mt-10 p-10 bg-gray-100 ">
      LITTLE SHOCKED, I will fine though!😬
    </p>
  ) : (
    <p className="text-orange-900 mt-10 p-10 bg-gray-100">
      Clap your hand bro, cause I'm happy😃{" "}
    </p>
  );
};

//  `theme` prop (e.g., "dark" or "light"). Use a template string to set a `className` like: `className={`container-${theme}`}`.
const Avatar = ({ username }) => {
  const imageUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`;
  return (
    <img
      className="w-40 h-40 rounded-full"
      src={imageUrl}
      alt={`${username}'s avatar`}
    />
  );
};

const ThemeBackground = ({ theme }) => {
  return (
    <p className={`${theme === "black" ? "bg-gray-300" : "bg-gray-200 "}`}>
      test
    </p>
  );
};

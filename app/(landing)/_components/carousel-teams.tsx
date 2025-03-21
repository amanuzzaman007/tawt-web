import SectionTitle from "@/components/section-title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "@/components/ui/carousel";
import UserItem from "./user-item";

const teams = [
  {
    first_row: {
      name: "Ali Rizvi",
      role: "CEO of SimpliTaught",
      twitter: "",
    },
    second_row: {
      name: "Hafsah Naveed",
      role: "Operations Manager and Content Supervisor",
      twitter: "https://www.linkedin.com/in/hafsahnaveed",
    },
  },
  {
    first_row: {
      name: "Adnan Arshad",
      role: "Head of Product",
      twitter: "https://www.linkedin.com/in/muhammad-adnan-arshad-9a6a5937",
      image: "/teams/adnan.jpg",
    },
    second_row: {
      name: "Zarmeen Iqbal",
      role: "Marketing Lead",
      twitter: "http://linkedin.com/in/zarmeen-iqbal-1703811b4",
    },
  },
  {
    first_row: {
      name: "Darren Thompson",
      role: "Head of Marketing",
      twitter: "",
    },
    second_row: {
      name: "Muhammad Umar",
      role: "Account Manager",
      twitter: "https://www.linkedin.com/in/muhammad-umar-579155239/",
    },
  },
  {
    first_row: {
      name: "Umair Amjad",
      role: "Head of Software Development",
      twitter: "https://www.linkedin.com/in/umair-k-a1549047/",
    },
    second_row: {
      name: "Zaman Hridoy",
      role: "Software Engineer",
      twitter: "",
    },
  },
];

function CarouselTeams() {
  return (
    <div className="relative w-full px-4 max-w-4xl mx-auto space-y-8">
      <SectionTitle title="Teams" />
      <Carousel>
        <CarouselContent className="-ml-4">
          {teams.map((team) => (
            <CarouselItem key={team.first_row.name} className="basis-1/4 pl-4">
              <div className="flex flex-col items-center justify-center gap-y-4">
                <UserItem
                  name={team.first_row.name}
                  role={team.first_row.role}
                  twitter={team.first_row.twitter}
                  image={team.first_row.image}
                />
                <UserItem
                  name={team.second_row.name}
                  role={team.second_row.role}
                  twitter={team.second_row.twitter}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation
          className="absolute -bottom-20 left-auto top-auto w-full justify-end gap-2"
          classNameButton="bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800"
          alwaysShow
        />
      </Carousel>
    </div>
  );
}

export default CarouselTeams;

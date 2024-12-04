
import img from "@/assets/ae-mohabbat.png";
import Image from "next/image";

const ExhibitionDetailPage = () => {
  const exhibitionData = {
		title: "Ae Mohabbat",
		description:
			"AE MOHABBAT: TRAVERSING HISTORICAL ROMANCES Fusing a story with pictorial elements, Pradiptaa Chakraborty rediscovers, and re-contextualizes historical romances in a unique genre of modernist moorings in a painting by bringing it forward with his own personal idioms.",
		date: "Oct 10 - Apr 13, 2024",
		location: "NEW DELHI",
		image: img,
		details: [
			"Ae Mohabbat unravels 6 works as the exemplification of an experimental approach to the genre of storytelling. Encompassing painting, Pradiptaa creates resonant yet romantic articulations of the Indian miniaturist tradition by inserting new dialogues that are romantic but more realistic in nature. The stories of romance across regions and boundaries caste and creed form a rich archive of imagery.",
			"Not young, not beautiful but strong and full of character and vigor, perhaps older in age these characters bring us close to human reality framed in a format of gorgeous gravitas. His visual vocabulary engages a multiplicity of themes including translation as narrative, the exploration of deviation as a means to cultivate new associations, and issues concerning social customs, scale, and time. The narrative is a central aspect of Pradiptaa's practice. It is not only crucial to the traditional format of miniature painting, but it also appears in his engagement with the art of telling short stories in one frame. Pradiptaa harnesses the spirit of the heroines he picks, they have ruled hearts and minds for centuries.",
			"This show seeks to salute the spirit of medieval maidens who cut across societal pressures to create their own stories even as it personifies the beauty of folk traditions in storytelling. Two legendary love stories from Punjab, one story from Bengal, one Welsh story, Mehboob Khan's legendary Mother India, and one panoramic canvas to muse upon. Pradiptaa dips his brush into the past and picks out love stories to reflect upon.",
		],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <Image 
            src={exhibitionData.image} 
            alt={exhibitionData.title}
            className="w-full rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-light">{exhibitionData.title}</h1>
          <p className="text-gray-700">{exhibitionData.description}</p>
          <div className="space-y-2">
            <p className="text-gray-600">{exhibitionData.date}</p>
            <p className="text-gray-600 uppercase">{exhibitionData.location}</p>
          </div>
          
          <div className="flex gap-4">
            <button className="px-6 py-2 border border-gray-300 hover:bg-gray-50 transition-colors">
              Browse Exhibition
            </button>
            <button className="px-6 py-2 border border-gray-300 hover:bg-gray-50 transition-colors">
              Download Catalog
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-light mb-8 text-center">Exhibition Detail</h2>
        <div className="space-y-6">
          {exhibitionData.details.map((detail, index) => (
            <p key={index} className="text-gray-700 leading-relaxed">
              {detail}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExhibitionDetailPage;

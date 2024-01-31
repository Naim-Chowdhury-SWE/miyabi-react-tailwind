// LangChanger.tsx

import sweSushi from "./Swedish/sweSushi";
import { Sushi as SushiEng } from "./English/engSushi";


function LanguageChanger() {
    const [selectedLanguage, setSelectedLanguage] = useState('Swedish');

    const getDishDetails = (translations, id) => {
        const dishTranslation = translations[selectedLanguage][id];
        return {
            dishname: dishTranslation.dishname,
            description: dishTranslation.description,
        };
    };

    const Menu = ({ name, dishes, translations, getDishDetails }) => {
        try {
            return (
                <div className="bg-orange-800 text-white">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    {dishes && dishes.map((dish) => (
                        <div key={dish.id}>
                            <h3>{Array.isArray(dish.dishname) && dish.dishname.join(' // ')}</h3>
                            <p>{Array.isArray(dish.description) && dish.description.join(' // ')}</p>
                            <div>
                                {Array.isArray(dish.pieces) && dish.pieces.join(', ')}
                                {Array.isArray(dish.types) && dish.types.join(', ')}
                            </div>
                        </div>
                    ))}
                </div>
            );
        } catch (error) {
            console.error("Error rendering Menu:", error);
            // You can add a fallback UI or handle the error in another way here
            return <div>Error rendering Menu. Please try again later.</div>;
        }
    };

    return (
        <>
            <h1 className="text-6xl text-center text-white font-bold underline">
                Miyabi
            </h1>
            <select
                name=""
                id=""
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
            >
                {Object.keys(translationsSushi).map((language) => (
                    <option key={language} value={language}>
                        {language}
                    </option>
                ))}
            </select>

            <Menu
                name="Sushi Meny"
                dishes={[
                    {
                        id: 1,
                        pieces: [7, 8, 9, 11, 13, 14, 16, 20],
                        prices: [89, 99, 109, 129, 149, 159, 179, 219],
                        images: [],
                        ...getDishDetails(translationsSushi, 1),
                    },
                    {
                        id: 2,
                        pieces: [8, 10, 12],
                        prices: [99, 119, 139],
                        images: [],
                        ...getDishDetails(translationsSushi, 2),
                    },
                ]}
                translations={translationsSushi}
                getDishDetails={getDishDetails}
            />

            <Menu
                name="Norimaki Meny"
                dishes={[
                    {
                        id: 1,
                        types: ["Normal", "Special"],
                        prices: [129, 149],
                        images: [],
                        ...getDishDetails(translationsNorimaki, 1),
                    },
                    {
                        id: 2,
                        types: [],
                        prices: [105],
                        images: [],
                        ...getDishDetails(translationsNorimaki, 2),
                    },
                ]}
                translations={translationsNorimaki}
                getDishDetails={getDishDetails}
            />
        </>
    );
}
import { render, screen, waitFor } from "@testing-library/react";
import { FoodMenuCard } from "..";
import { normalizePriceToString } from "../../../shared/utils/normalizePrice";


const title = "Ensalada";
const image = "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467__340.jpg";
const price = 1500;


describe('FoodMenuCard', () => {
    it('Renderiza el componente con los datos basicos necesarios', () => {
        const { container } = render(<FoodMenuCard title={title} image={image} price={price} />);

        expect(screen.getByText(title).textContent).toBe(title);
        expect(screen.getByRole("img").getAttribute("src")).toBe(image);
        expect(screen.getByText(normalizePriceToString(price)).textContent).toBe("S/ 1,500");
        expect(container.querySelector('.food-menu__overlay')).toBeNull();
    });

    it('Muestra y renderiza el componente overlay sobre la imagen', async () => {
        const { container } =  render(<FoodMenuCard renderOverlayImage={()=><button>overlay</button>} />);    
        await waitFor(() => {
            expect(container.querySelector('.food-menu__overlay')).not.toBeNull();
            expect(screen.getByRole("button")).toBeInTheDocument();
        })
    });

});
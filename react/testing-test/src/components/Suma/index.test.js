import Suma from './index';
import { shallow } from 'enzyme';
describe("Tests del componente Suma", () => {
  it("Test ok", () => {
    //Vamos a poner la logica de nuestro test
    expect(true).toBe(true);
  });

  it("Random test", () => {
    const wrapper = shallow(<Suma />);
    console.log(wrapper.debug());
    expect(wrapper.find("p").text()).toBe("0");
  })
  
})
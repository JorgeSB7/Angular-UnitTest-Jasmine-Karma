import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Book } from "src/app/models/book.model";
import { BookService } from "src/app/services/book.service";
import { CartComponent } from "./cart.component";

const listBook: Book[] = [
    {
        name: 'El nombre del viento',
        author: 'Patrick Rothfuss',
        isbn: '9780756413712',
        price: 20.99,
        amount: 2,
    },
    {
        name: 'El imperio final',
        author: 'Brandon Sanderson',
        isbn: '9780765350381',
        price: 10.57,
        amount: 1,
    },
];

describe('cart_component', () => {
    let component: CartComponent
    let fixture: ComponentFixture<CartComponent>;
    let service: BookService;

    // CONFIGURACON DEL TEST
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [CartComponent],
            providers: [BookService],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    // INSTANCIA DEL TEST
    beforeEach(() => {
        fixture = TestBed.createComponent(CartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Creación del componente', () => {
        expect(component).toBeTruthy();
    });

    it('getTotalPrice comprobando lo que devuelve', () => {
        const totalPrice = component.getTotalPrice(listBook);
        // Comprueba que totalPrice sea mayor a 0
        expect(totalPrice).toBeGreaterThan(0);
        // Comprueba que totalPrice no sea 0
        expect(totalPrice).not.toBe(0);
        // Comprueba que totalPrice no sea null
        expect(totalPrice).not.toBeNull();
    });

    // Comprueba que haya un cambio en el metodo a sumar 1 en la cantidad de book 
    // y si se llaman a los metodos updateAmountBook y getTotalPrice
    it('onInputNumberChange comprobando el cambio', () => {
        const action = 'plus';
        const book = listBook[0];
        const service = fixture.debugElement.injector.get(BookService);

        // Es muy importante que el espia se ecnuentre antes de la llamada a onInputNumberChange
        const spy1 = spyOn(service, 'updateAmountBook').and.callFake(()=> null); // Simula una llamada al servicio updateAmountBook
        const spy2 = spyOn(component, 'getTotalPrice').and.callFake(()=> null); // Simula una llamada al metodo getTotalPrice

        component.onInputNumberChange(action, book);

        expect(spy1).toHaveBeenCalled();
        expect(spy2).toHaveBeenCalled();
    });
});
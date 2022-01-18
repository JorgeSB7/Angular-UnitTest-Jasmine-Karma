import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BookService } from "src/app/services/book.service";
import { CartComponent } from "./cart.component";

describe('cart_component', () => {
    let component: CartComponent
    let fixture: ComponentFixture<CartComponent>;

    // CONFIGURACON DEL TEST
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [CartComponent],
            providers: [BookService],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        });
    });

    // INSTANCIA DEL TEST
    beforeEach(() => {
        fixture = TestBed.createComponent(CartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Creación del componente', () => {
        expect(component).toBeTruthy();
    })
});
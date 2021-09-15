import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../product.model";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  product: Product = {
    id: undefined,
    name: "",
    price: null,
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id")) | 0;
    this.productService.readById(String(id)).subscribe(product => {
      this.product = product;
    })
  }

  deleteProduct(): void {
    this.productService.delete(String(this.product.id)).subscribe(() => {
      this.productService.showMessage("Produto apagado com sucesso!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
package br.unipe.dayvison.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ProdutoRest {
	
	@PostMapping("/produto")
    public ResponseEntity<Produto> salvar(@RequestBody Produto produto){
        produto.setId(1l);
        return ResponseEntity.ok(produto);
    }

    @GetMapping("/produto/{id}")
    public ResponseEntity<Produto> getProdutoById(@PathVariable("id") Long id){
        Produto p = new Produto();
        p.setId(id);
        p.setNome("Dayvison");

        return ResponseEntity.ok(p);
    }
	@GetMapping("/produto")
	public ResponseEntity<Produto> getProduto() {
		Produto p = new Produto();
		p.setId(5l);
		p.setNome("Dayvison");
		
		return ResponseEntity.ok(p);
	}

}

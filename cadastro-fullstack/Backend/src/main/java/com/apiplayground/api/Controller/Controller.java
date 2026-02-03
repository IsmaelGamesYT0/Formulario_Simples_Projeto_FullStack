package com.apiplayground.api.Controller;
import com.apiplayground.api.dto.CadastroRequest;
import com.apiplayground.api.dto.StatusResponse;
import org.springframework.web.bind.annotation.*;


@RestController
public class Controller {

    @GetMapping("/oi")
    public String oi() {
        return "Tá funcionando porra!";
    }

    @GetMapping("/status")
    public StatusResponse status() {
        return new StatusResponse(true, "API funcionando");
    }

    @PostMapping("/cadastro")
    @CrossOrigin
       public StatusResponse cadastro(@RequestBody CadastroRequest dados) {
        return new StatusResponse(true, "Cadastro realizado com sucesso para " + dados.getNome());

    }
}


package com.apiplayground.api.dto;

public class CadastroRequest {
    private String nome;
    private String email;
    private String telefone;
    private int idade;
    private String senha;

    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public String getTelefone() {
        return telefone;
    }

    public int getIdade() {
        return idade;
    }

    public String getSenha() {
        return senha;
    }
}

package com.apiplayground.api.dto;

public class StatusResponse {

    private boolean ok;
    private String mensagem;

    public StatusResponse(boolean ok, String mensagem) {
        this.ok = ok;
        this.mensagem = mensagem;
    }

    public boolean isOk() {
        return ok;
    }

    public String getMensagem() {
        return mensagem;
    }
}

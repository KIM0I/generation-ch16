package com.generation.fgm.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.fgm.models.UsuarioModel;
import com.generation.fgm.services.UsuarioService;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;


@RestController
@RequestMapping("/usuario")

public class UsuarioController {
	@Autowired
UsuarioService usuarioService;
	@GetMapping()
	public ArrayList<UsuarioModel>obtenerUsuarios(){
        return UsuarioService.obtenerUsuarios();
        
        
    }
	@PostMapping()
	public UsuarioModel guardarUsuario(@RequestBody UsuarioModel usuario){
        return this.usuarioService.guardarUsuarios(usuario);
    }


}

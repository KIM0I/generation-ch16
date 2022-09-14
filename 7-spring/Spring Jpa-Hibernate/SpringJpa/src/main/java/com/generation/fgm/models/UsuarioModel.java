package com.generation.fgm.models;

import org.springframework.stereotype.Service;

import com.generation.fgm.repositories.UsuarioRepository;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import com.generation.fgm.models.UsuarioModel;



@Service

public class UsuarioModel {
	@Autowired
	UsuarioRepository usuarioRepository;

	public ArrayList<UsuarioModel>obtenerUsuario(){
		return (ArrayList<UsuarioModel>)usuarioRepository.findAll();
		
	}
	public UsuarioModel guardarUsuario(UsuarioModel usuario){
        return usuarioRepository.save(usuario);
    }

}

package com.nioh2wiki.nioh2wiki.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="yokai")
@Data
public class Yokai {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "image")
    private String image;

    @Column(name = "description")
    private String description;

    @Column(name = "weakness")
    private String weakness;
}

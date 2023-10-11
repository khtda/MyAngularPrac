package com.nioh2wiki.nioh2wiki.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="mission")
@Data
public class Mission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "chapter")
    private String chapter;

    @Column(name = "mainorsub")
    private String mainOrSub;

    @Column(name = "image")
    private String image;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "boss")
    private String boss;
}

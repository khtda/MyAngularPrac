package com.nioh2wiki.nioh2wiki.dao;

import com.nioh2wiki.nioh2wiki.entity.Yokai;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface YokaiRepository extends JpaRepository<Yokai, Long> {

    Page<Yokai> findByNameContaining(@Param("name") String name, Pageable page);

}

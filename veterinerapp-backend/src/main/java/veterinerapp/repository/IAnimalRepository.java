package veterinerapp.repository;

import org.jetbrains.annotations.NotNull;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import veterinerapp.entity.Animal;

import java.util.UUID;

@Repository
public interface IAnimalRepository extends JpaRepository<Animal , UUID> {

    Animal findByAnimalName(String animalName);
    @NotNull Page<Animal> findAll(Pageable pageable);

}

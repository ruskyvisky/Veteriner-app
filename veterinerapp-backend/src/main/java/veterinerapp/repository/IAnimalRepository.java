package veterinerapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import veterinerapp.entity.Animal;

import java.util.UUID;

@Repository
public interface IAnimalRepository extends JpaRepository<Animal , UUID> {

    Animal findByAnimalName(String animalName);


}

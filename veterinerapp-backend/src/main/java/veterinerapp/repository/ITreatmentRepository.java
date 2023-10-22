package veterinerapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import veterinerapp.entity.Animal;
import veterinerapp.entity.Treatment;

import java.util.List;
import java.util.UUID;

public interface ITreatmentRepository extends JpaRepository<Treatment , UUID> {


}

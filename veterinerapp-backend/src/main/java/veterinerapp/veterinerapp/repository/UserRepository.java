package veterinerapp.veterinerapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import veterinerapp.veterinerapp.entity.User; // User sınıfının paket adını burada belirttiğinizden emin olun

import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {
   
}
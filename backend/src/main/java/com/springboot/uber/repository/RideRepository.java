package com.springboot.uber.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.uber.model.Ride;

@Repository
public interface RideRepository extends JpaRepository<Ride, Long> {
//	@Modifying
//	@Transactional
//	@Query("UPDATE ride r SET r.pickup = :pickup, r.destination = :destination, r.duration = :duration, r.fare = :fare, r.status = :status, r.distance = :distance, r.driver_id = :driver_id, r.vehicle_id = :vehicle_id WHERE r.id = :id")
//	void update(@Param("id") Long id, @Param("pickup") String pickup, @Param("destination") String destination,
//			@Param("duration") int duration, @Param("fare") int fare, @Param("status") int status,
//			@Param("distance") int distance, @Param("driver_id") Long driver_id, @Param("vehicle_id") Long vehicle_id);
}
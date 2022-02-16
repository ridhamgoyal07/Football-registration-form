package com.football.football.entities;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.Range;
import org.springframework.context.annotation.Primary;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Entity
@Table(name = "Players")
public class Player {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
        private int uid;

        @NotNull(message = "First Name Required")
        @Pattern(regexp = "^[A-z]+$" , message="Invalid First Name!!")
        private String firstName;

        @Pattern(regexp = "^[a-zA-Z\\s]*$",message = "lastName is invalid")
        private String lastName;

        @NotNull(message = "Country Code Required")
        @Pattern(regexp ="^\\+[0-9]+$" , message = "Invalid Country Code")
        private String countryCode;

        @NotNull(message = "Phone Number is required")
        @Pattern(regexp = "\\d{10}")
        private String phoneNumber;

        @NotNull(message = "Email Required")
        @Email(message = "Invalid Email")
//        @Column(unique = true)
        private String email;

        @NotNull(message = "Username Required")
        @Pattern(regexp = "^[A-z0-9]+$" , message = "Invalid Username")
        @Column(updatable = false)
        private String username;

        @NotNull(message = "Age Group is Required")
        private String age;

        @NotNull(message = "Desired Team is Required")
        private String desiredTeam;

        @NotNull(message = "Desired Position is required")
        private String desiredPosition;

        private String address;

        @Range(min =100000 , max = 999999 , message = "Pin-code is Required")
        private int pin_code;

        @NotNull(message = "Country is Required")
        private String country;

        @NotNull(message = "City is Required")
        private String city;

        @NotNull(message = "State is Required")
        private String state;

        public Player() {
        }

        public Player(int uid, String username, String firstName, String lastName, String countryCode, String phoneNumber, String email, String age, String desiredTeam, String desiredPosition, String address, int pin_code, String country, String city, String state) {
                this.uid = uid;
                this.username = username;
                this.firstName = firstName;
                this.lastName = lastName;
                this.countryCode = countryCode;
                this.phoneNumber = phoneNumber;
                this.email = email;
                this.age = age;
                this.desiredTeam = desiredTeam;
                this.desiredPosition = desiredPosition;
                this.address = address;
                this.pin_code = pin_code;
                this.country = country;
                this.city = city;
                this.state = state;
        }

        public int getUid() {
                return uid;
        }

        public void setUid(int uid) {
                this.uid = uid;
        }

        public String getFirstName() {
                return firstName;
        }

        public void setFirstName(String firstName) {
                this.firstName = firstName;
        }

        public String getLastName() {
                return lastName;
        }

        public void setLastName(String lastName) {
                this.lastName = lastName;
        }

        public String getPhoneNumber() {
                return phoneNumber;
        }

        public void setPhoneNumber(String phoneNumber) {
                this.phoneNumber = phoneNumber;
        }

        public String getEmail() {
                return email;
        }

        public void setEmail(String email) {
                this.email = email;
        }

        public String getUsername() {
                return username;
        }

        public void setUsername(String username) {
                this.username = username;
        }

        public String getAge() {
                return age;
        }

        public void setAge(String age) {
                this.age = age;
        }

        public String getDesiredTeam() {
                return desiredTeam;
        }

        public void setDesiredTeam(String desiredTeam) {
                this.desiredTeam = desiredTeam;
        }

        public String getDesiredPosition() {
                return desiredPosition;
        }

        public void setDesiredPosition(String desiredPosition) {
                this.desiredPosition = desiredPosition;
        }

        public String getAddress() {
                return address;
        }

        public void setAddress(String address) {
                this.address = address;
        }

        public String getCountryCode() {
                return countryCode;
        }

        public void setCountryCode(String countryCode) {
                this.countryCode = countryCode;
        }

        public int getPin_code() {
                return pin_code;
        }

        public void setPin_code(int pin_code) {
                this.pin_code = pin_code;
        }

        public String getCountry() {
                return country;
        }

        public void setCountry(String country) {
                this.country = country;
        }

        public String getCity() {
                return city;
        }

        public void setCity(String city) {
                this.city = city;
        }

        public String getState() {
                return state;
        }

        public void setState(String state) {
                this.state = state;
        }

        @Override
        public String toString() {
                return "Player{" +
                        "uid=" + uid +
                        ", firstName='" + firstName + '\'' +
                        ", lastName='" + lastName + '\'' +
                        ", phoneNumber='" + phoneNumber + '\'' +
                        ", email='" + email + '\'' +
                        ", username='" + username + '\'' +
                        ", age='" + age + '\'' +
                        ", desiredTeam='" + desiredTeam + '\'' +
                        ", desiredPosition='" + desiredPosition + '\'' +
                        ", address='" + address + '\'' +
                        ", pin_code=" + pin_code +
                        ", country='" + country + '\'' +
                        ", city='" + city + '\'' +
                        ", state='" + state + '\'' +
                        '}';
        }
}

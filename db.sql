CREATE TABLE public.student_details(
    student_id bigserial,
    phone_number bigint NOT NULL,
    user_type generalType DEFAULT 'user',
    plan planType DEFAULT 'unsubscribe',
    name varchar(50),
    email varchar(50),
    gender varchar(15),
    token text,
    valid Date,
    platform varchar(50) NOT NULL,
    PRIMARY KEY (user_id)
);
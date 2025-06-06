CREATE TABLE IF NOT EXISTS classes (
    id TEXT PRIMARY KEY,
    description TEXT NOT NULL
);

INSERT INTO
    classes (id, description)
VALUES
    (
        'CLS101',
        'Foundational Studies'
    ),
    (
        'CLS102',
        'Core Subjects'
    ),
    (
        'CLS103',
        'Advanced Prep'
    ),
    (
        'CLS104',
        'Capstone Projects'
    );

CREATE TABLE IF NOT EXISTS subjects (
    id SERIAL PRIMARY KEY,
    class_id TEXT NOT NULL,
    name TEXT NOT NULL,
    FOREIGN KEY (class_id) REFERENCES classes(id)
);

CREATE INDEX idx_subjects_class_id ON subjects(class_id);

INSERT INTO
    subjects (class_id, name)
VALUES
    -- CLS101
    ('CLS101', 'Math'),
    ('CLS101', 'English'),
    ('CLS101', 'Science'),
    -- CLS102
    ('CLS102', 'Math'),
    ('CLS102', 'History'),
    ('CLS102', 'Geography'),
    -- CLS103
    ('CLS103', 'Biology'),
    ('CLS103', 'Chemistry'),
    ('CLS103', 'Physics'),
    -- CLS104
    ('CLS104', 'Art'),
    ('CLS104', 'Music'),
    ('CLS104', 'Physical Education');

CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER NOT NULL,
    class_id TEXT,
    FOREIGN KEY (class_id) REFERENCES classes(id)
);

INSERT INTO
    students (name, age, class_id)
VALUES
    ('Zane Johnson', 16, 'CLS101'),
    ('Nina White', 18, 'CLS102'),
    ('Ian Miller', 16, 'CLS103'),
    ('Alice Williams', 15, 'CLS104'),
    ('Jane Taylor', 17, 'CLS101'),
    ('Mike Miller', 14, 'CLS102'),
    ('Rachel Garcia', 14, 'CLS103'),
    ('Ian White', 14, 'CLS104'),
    ('Wendy Thompson', 17, 'CLS101'),
    ('Alice Thompson', 15, 'CLS102'),
    ('Rachel Johnson', 17, 'CLS103'),
    ('Alice Williams', 14, 'CLS104'),
    ('Wendy Williams', 14, 'CLS101'),
    ('Rachel Martin', 17, 'CLS102'),
    ('Nina Rodriguez', 16, 'CLS103'),
    ('Tina White', 18, 'CLS104'),
    ('Fiona Smith', 16, 'CLS101'),
    ('David Williams', 16, 'CLS102'),
    ('Wendy Johnson', 15, 'CLS103'),
    ('Steve Davis', 18, 'CLS104'),
    ('Hannah Martinez', 16, 'CLS101'),
    ('Ethan Smith', 17, 'CLS102'),
    ('Jane Smith', 17, 'CLS103'),
    ('Paula Jones', 16, 'CLS104'),
    ('Yara Rodriguez', 15, 'CLS101'),
    ('Jane Martin', 16, 'CLS102'),
    ('Amber Jones', 14, 'CLS103'),
    ('Ethan Anderson', 14, 'CLS104'),
    ('Wendy Smith', 15, 'CLS101'),
    ('Zane Garcia', 14, 'CLS102');

CREATE TABLE users (
    email TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL
);

INSERT INTO
    users (email, name, password, role)
VALUES
    (
        'student@mockschool.com',
        'Student',
        '$2b$10$8Ky2DcMO1pBKe/FFM6UvX.Qak2b8T8Voq3hJSP03S9SjVfq04xeLG',
        'student'
    ),
    (
        'admin@mockschool.com',
        'Admin',
        '$2b$10$kcYrk9b005JGPjNIhATqZ.dzhsyZBPnWHIXyGgE4ff9c/Q4W5FfTe',
        'admin'
    );

CREATE TABLE IF NOT EXISTS attendance (
    id SERIAL PRIMARY KEY,
    student_id INTEGER NOT NULL,
    date DATE NOT NULL,
    class_id TEXT NOT NULL,
    status TEXT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (class_id) REFERENCES classes(id)
);

CREATE INDEX idx_attendance_student_id ON attendance(student_id);

INSERT INTO
    attendance (student_id, date, class_id, status)
VALUES
    (1, '2025-05-22', 'CLS101', 'Late'),
    (1, '2025-05-21', 'CLS101', 'Absent'),
    (1, '2025-05-20', 'CLS101', 'Late'),
    (1, '2025-05-19', 'CLS101', 'Absent'),
    (1, '2025-05-18', 'CLS101', 'Late'),
    (2, '2025-05-22', 'CLS102', 'Late'),
    (2, '2025-05-21', 'CLS102', 'Absent'),
    (2, '2025-05-20', 'CLS102', 'Late'),
    (2, '2025-05-19', 'CLS102', 'Absent'),
    (2, '2025-05-18', 'CLS102', 'Absent'),
    (3, '2025-05-22', 'CLS103', 'Late'),
    (3, '2025-05-21', 'CLS103', 'Late'),
    (3, '2025-05-20', 'CLS103', 'Absent'),
    (3, '2025-05-19', 'CLS103', 'Absent'),
    (3, '2025-05-18', 'CLS103', 'Absent'),
    (4, '2025-05-22', 'CLS104', 'Late'),
    (4, '2025-05-21', 'CLS104', 'Absent'),
    (4, '2025-05-20', 'CLS104', 'Absent'),
    (4, '2025-05-19', 'CLS104', 'Absent'),
    (4, '2025-05-18', 'CLS104', 'Late'),
    (5, '2025-05-22', 'CLS101', 'Present'),
    (5, '2025-05-21', 'CLS101', 'Late'),
    (5, '2025-05-20', 'CLS101', 'Absent'),
    (5, '2025-05-19', 'CLS101', 'Absent'),
    (5, '2025-05-18', 'CLS101', 'Present'),
    (6, '2025-05-22', 'CLS102', 'Present'),
    (6, '2025-05-21', 'CLS102', 'Late'),
    (6, '2025-05-20', 'CLS102', 'Late'),
    (6, '2025-05-19', 'CLS102', 'Late'),
    (6, '2025-05-18', 'CLS102', 'Late'),
    (7, '2025-05-22', 'CLS103', 'Present'),
    (7, '2025-05-21', 'CLS103', 'Late'),
    (7, '2025-05-20', 'CLS103', 'Absent'),
    (7, '2025-05-19', 'CLS103', 'Present'),
    (7, '2025-05-18', 'CLS103', 'Present'),
    (8, '2025-05-22', 'CLS104', 'Present'),
    (8, '2025-05-21', 'CLS104', 'Present'),
    (8, '2025-05-20', 'CLS104', 'Late'),
    (8, '2025-05-19', 'CLS104', 'Absent'),
    (8, '2025-05-18', 'CLS104', 'Present'),
    (9, '2025-05-22', 'CLS101', 'Present'),
    (9, '2025-05-21', 'CLS101', 'Present'),
    (9, '2025-05-20', 'CLS101', 'Late'),
    (9, '2025-05-19', 'CLS101', 'Late'),
    (9, '2025-05-18', 'CLS101', 'Absent'),
    (10, '2025-05-22', 'CLS102', 'Present'),
    (10, '2025-05-21', 'CLS102', 'Late'),
    (10, '2025-05-20', 'CLS102', 'Present'),
    (10, '2025-05-19', 'CLS102', 'Late'),
    (10, '2025-05-18', 'CLS102', 'Late'),
    (11, '2025-05-22', 'CLS103', 'Present'),
    (11, '2025-05-21', 'CLS103', 'Late'),
    (11, '2025-05-20', 'CLS103', 'Late'),
    (11, '2025-05-19', 'CLS103', 'Absent'),
    (11, '2025-05-18', 'CLS103', 'Present'),
    (12, '2025-05-22', 'CLS104', 'Absent'),
    (12, '2025-05-21', 'CLS104', 'Absent'),
    (12, '2025-05-20', 'CLS104', 'Present'),
    (12, '2025-05-19', 'CLS104', 'Late'),
    (12, '2025-05-18', 'CLS104', 'Late'),
    (13, '2025-05-22', 'CLS101', 'Absent'),
    (13, '2025-05-21', 'CLS101', 'Absent'),
    (13, '2025-05-20', 'CLS101', 'Absent'),
    (13, '2025-05-19', 'CLS101', 'Present'),
    (13, '2025-05-18', 'CLS101', 'Present'),
    (14, '2025-05-22', 'CLS102', 'Absent'),
    (14, '2025-05-21', 'CLS102', 'Present'),
    (14, '2025-05-20', 'CLS102', 'Late'),
    (14, '2025-05-19', 'CLS102', 'Absent'),
    (14, '2025-05-18', 'CLS102', 'Late'),
    (15, '2025-05-22', 'CLS103', 'Present'),
    (15, '2025-05-21', 'CLS103', 'Present'),
    (15, '2025-05-20', 'CLS103', 'Present'),
    (15, '2025-05-19', 'CLS103', 'Late'),
    (15, '2025-05-18', 'CLS103', 'Absent'),
    (16, '2025-05-22', 'CLS104', 'Late'),
    (16, '2025-05-21', 'CLS104', 'Present'),
    (16, '2025-05-20', 'CLS104', 'Late'),
    (16, '2025-05-19', 'CLS104', 'Absent'),
    (16, '2025-05-18', 'CLS104', 'Present'),
    (17, '2025-05-22', 'CLS101', 'Late'),
    (17, '2025-05-21', 'CLS101', 'Absent'),
    (17, '2025-05-20', 'CLS101', 'Present'),
    (17, '2025-05-19', 'CLS101', 'Present'),
    (17, '2025-05-18', 'CLS101', 'Present'),
    (18, '2025-05-22', 'CLS102', 'Late'),
    (18, '2025-05-21', 'CLS102', 'Absent'),
    (18, '2025-05-20', 'CLS102', 'Absent'),
    (18, '2025-05-19', 'CLS102', 'Late'),
    (18, '2025-05-18', 'CLS102', 'Present'),
    (19, '2025-05-22', 'CLS103', 'Present'),
    (19, '2025-05-21', 'CLS103', 'Absent'),
    (19, '2025-05-20', 'CLS103', 'Present'),
    (19, '2025-05-19', 'CLS103', 'Absent'),
    (19, '2025-05-18', 'CLS103', 'Present'),
    (20, '2025-05-22', 'CLS104', 'Absent'),
    (20, '2025-05-21', 'CLS104', 'Absent'),
    (20, '2025-05-20', 'CLS104', 'Present'),
    (20, '2025-05-19', 'CLS104', 'Present'),
    (20, '2025-05-18', 'CLS104', 'Present'),
    (21, '2025-05-22', 'CLS101', 'Absent'),
    (21, '2025-05-21', 'CLS101', 'Present'),
    (21, '2025-05-20', 'CLS101', 'Late'),
    (21, '2025-05-19', 'CLS101', 'Absent'),
    (21, '2025-05-18', 'CLS101', 'Present'),
    (22, '2025-05-22', 'CLS102', 'Present'),
    (22, '2025-05-21', 'CLS102', 'Absent'),
    (22, '2025-05-20', 'CLS102', 'Absent'),
    (22, '2025-05-19', 'CLS102', 'Late'),
    (22, '2025-05-18', 'CLS102', 'Present'),
    (23, '2025-05-22', 'CLS103', 'Late'),
    (23, '2025-05-21', 'CLS103', 'Present'),
    (23, '2025-05-20', 'CLS103', 'Absent'),
    (23, '2025-05-19', 'CLS103', 'Absent'),
    (23, '2025-05-18', 'CLS103', 'Late'),
    (24, '2025-05-22', 'CLS104', 'Present'),
    (24, '2025-05-21', 'CLS104', 'Absent'),
    (24, '2025-05-20', 'CLS104', 'Present'),
    (24, '2025-05-19', 'CLS104', 'Absent'),
    (24, '2025-05-18', 'CLS104', 'Absent'),
    (25, '2025-05-22', 'CLS101', 'Present'),
    (25, '2025-05-21', 'CLS101', 'Late'),
    (25, '2025-05-20', 'CLS101', 'Late'),
    (25, '2025-05-19', 'CLS101', 'Absent'),
    (25, '2025-05-18', 'CLS101', 'Absent'),
    (26, '2025-05-22', 'CLS102', 'Present'),
    (26, '2025-05-21', 'CLS102', 'Late'),
    (26, '2025-05-20', 'CLS102', 'Absent'),
    (26, '2025-05-19', 'CLS102', 'Absent'),
    (26, '2025-05-18', 'CLS102', 'Absent'),
    (27, '2025-05-22', 'CLS103', 'Late'),
    (27, '2025-05-21', 'CLS103', 'Present'),
    (27, '2025-05-20', 'CLS103', 'Absent'),
    (27, '2025-05-19', 'CLS103', 'Late'),
    (27, '2025-05-18', 'CLS103', 'Absent'),
    (28, '2025-05-22', 'CLS104', 'Absent'),
    (28, '2025-05-21', 'CLS104', 'Late'),
    (28, '2025-05-20', 'CLS104', 'Present'),
    (28, '2025-05-19', 'CLS104', 'Absent'),
    (28, '2025-05-18', 'CLS104', 'Present'),
    (29, '2025-05-22', 'CLS101', 'Late'),
    (29, '2025-05-21', 'CLS101', 'Absent'),
    (29, '2025-05-20', 'CLS101', 'Late'),
    (29, '2025-05-19', 'CLS101', 'Absent'),
    (29, '2025-05-18', 'CLS101', 'Late'),
    (30, '2025-05-22', 'CLS102', 'Late'),
    (30, '2025-05-21', 'CLS102', 'Absent'),
    (30, '2025-05-20', 'CLS102', 'Absent'),
    (30, '2025-05-19', 'CLS102', 'Absent'),
    (30, '2025-05-18', 'CLS102', 'Late');
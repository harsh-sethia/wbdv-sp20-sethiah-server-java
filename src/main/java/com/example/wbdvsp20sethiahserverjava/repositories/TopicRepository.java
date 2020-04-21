package com.example.wbdvsp20sethiahserverjava.repositories;

import com.example.wbdvsp20sethiahserverjava.models.Topic;
import com.example.wbdvsp20sethiahserverjava.models.Widget;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TopicRepository
        extends CrudRepository<Topic, Integer> {

    @Query("SELECT topic FROM Topic topic WHERE topic.id=:tid")
    public Topic findTopicById(
            @Param("tid") Integer tid);

    @Query("SELECT topic FROM Topic topic")
    public List<Topic> findAllTopics();

    @Query("SELECT topic FROM Topic topic WHERE topic.lessonId=:lid")
    public List<Topic> findTopicForLesson(
            @Param("lid") String lessonId);
}

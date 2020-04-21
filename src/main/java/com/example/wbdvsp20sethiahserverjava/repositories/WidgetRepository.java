package com.example.wbdvsp20sethiahserverjava.repositories;

import com.example.wbdvsp20sethiahserverjava.models.Widget;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WidgetRepository extends
        CrudRepository<Widget, Integer> {

    // SELECT * FROM cs4550_sp20.widgets WHERE topicId = ' ';

    /*@Query(nativeQuery = true, value = "SELECT * FROM widgets WHERE topic_id=:tid")
    public List<Widget> findWidgetForTopic(
            @Param("tid") String topicId);*/

    @Query("SELECT widget FROM Widget widget WHERE widget.id=:wid")
    public Widget findWidgetById(
            @Param("wid") Integer wid);

    @Query("SELECT widget FROM Widget widget")
    public List<Widget> findAllWidgets();

    @Query("SELECT widget FROM Widget widget WHERE widget.topic.id=:tid")
    public List<Widget> findWidgetForTopic(
            @Param("tid") int topicId);

    /*@Query("DELETE widget FROM Widget widget WHERE widget.id=wid")
    * public Widget deleteWidgetById(
    * @Param("wid") Integer wid);*/

}

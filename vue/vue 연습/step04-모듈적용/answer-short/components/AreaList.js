export default {
  template: `
    <div class="col-8">
        <table class="table table-bordered table-condensed table-hover">
          <tr>
            <th>지역</th>
            <th>반</th>
            <th>강사</th>
          </tr>
          <tr
            v-for="area in areas"
            :key="area.no"
            @click="detail(area.no)"
          >
            <td>{{area.name}}</td>
            <td>{{area.classNo}}</td>
            <td>{{area.instructorName}}</td>
          </tr>
          <tr v-if="areas.length === 0">
            <td colspan="3">데이터가 없습니다.</td>
          </tr>
        </table>
      </div>
    `,
  data() {
    return {
      areas: [],
    };
  },
  created() {
    const areas = localStorage.getItem('areas');
    let newAreas = {
      sequence: 0,
      items: [],
    };
    if (areas) {
      newAreas = JSON.parse(areas);
    } else {
      localStorage.setItem('areas', JSON.stringify(newAreas));
    }
    this.areas = newAreas.items;

    bus.$on('changeList', (areas) => {
      this.areas = areas;
    });
  },
  methods: {
    detail(no) {
      this.areas.forEach((area) => {
        if (area.no === no) {
          bus.$emit('selectedArea', area); // 이벤트 호출하기
        }
      });
    },
  },
};

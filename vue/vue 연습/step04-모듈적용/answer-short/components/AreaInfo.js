export default {
  template: `
    <div class="col-4">
      <div class="form-group">
        <label for="name" class="form-control-plaintext">지역명</label>
        <input
          type="text"
          class="form-control"
          v-model="name"
          placeholder="지역명을 입력하세요"
        />
      </div>
      <div class="form-group">
        <label for="classNo" class="form-control-plaintext">반</label
        ><input
          type="number"
          class="form-control"
          v-model.number="classNo"
        />
      </div>
      <div class="form-group">
        <label for="instructorName" class="form-control-plaintext"
          >강사</label
        ><input
          type="text"
          class="form-control"
          v-model="instructorName"
          placeholder="이름을 입력하세요"
        />
      </div>
      <div class="form-group text-right">
        <button
          class="btn btn-info"
          v-if="mode === 'reg'"
          @click="regArea"
        >
          등록
        </button>
        <button
          class="btn btn-warning"
          @click="initForm"
          v-if="mode === 'detail'"
        >
          목록
        </button>
      </div>
    </div>
    `,
  data() {
    return {
      instructorName: '',
      name: '',
      classNo: 0,
      mode: 'reg',
    };
  },
  created() {
    bus.$on('selectedArea', (area) => {
      this.mode = 'detail';
      this.instructorName = area.instructorName;
      this.name = area.name;
      this.classNo = area.classNo;
    });
  },
  methods: {
    initForm() {
      this.instructorName = '';
      this.name = '';
      this.classNo = 0;
      this.mode = 'reg';
    },
    regArea() {
      // 로컬스토리지에 저장된 데이터 가져오기
      const areas = localStorage.getItem('areas');
      // 데이터 선언
      let newAreas = {
        no: 0,
        items: [],
      };

      // 기존 로컬스토리지에 저장된 내용이 있다면 newAreas 객체를 변경
      if (areas) {
        newAreas = JSON.parse(areas);
      }

      // 화면 입력된 데이터를 newAreas에 추가
      newAreas.items.push({
        no: ++newAreas.no,
        instructorName: this.instructorName,
        name: this.name,
        classNo: this.classNo,
      });

      // 로컬스트리지 저장
      localStorage.setItem('areas', JSON.stringify(newAreas));
      this.initForm();
      bus.$emit('changeList', newAreas.items);
    },
  },
};
